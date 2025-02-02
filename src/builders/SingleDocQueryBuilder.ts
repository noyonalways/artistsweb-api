import { Document, Model } from "mongoose";

// The builder class is now generic and reusable for any Mongoose model
class SingleDocQueryBuilder<T extends Document> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private query: any;
  private populateOptions: string[] = [];

  constructor(
    private model: Model<T>,
    private filter: Record<string, unknown>,
    private options: Record<string, unknown>,
  ) {
    this.query = this.model.findOne(filter);
  }

  // Set fields to select, accepting an array of fields
  selectFields(defaultFields?: string[]) {
    const fieldsToSelect = this.options.expand
      ? ""
      : this.options.fields
        ? (this.options.fields as string).split(",").join(" ")
        : defaultFields && defaultFields.join(" ");

    this.query = this.query.select(fieldsToSelect);
    return this;
  }

  // Add populate for specific fields, accepts multiple fields
  populate(fields: string[]) {
    if (this.options.expand === false) {
      this.populateOptions = [];
    } else if (this.options.fields) {
      const requestedFields = (this.options.fields as string).split(",");
      this.populateOptions = fields.filter((field) =>
        requestedFields.includes(field),
      );
    } else {
      this.populateOptions = fields;
    }
    return this;
  }

  // Execute the query
  async execute(): Promise<T | null> {
    if (this.options.expand === "false") {
      this.populateOptions = [];
    }

    // Populate if necessary
    if (this.populateOptions.length > 0) {
      this.populateOptions.forEach((field) => {
        this.query = this.query.populate(field);
      });
    }
    return this.query.exec();
  }
}

export default SingleDocQueryBuilder;
