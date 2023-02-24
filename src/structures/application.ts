export interface RawApplicationRoleConnectionMetadata {
  type: ApplicationRoleConnectionMetadataType;
}

export enum ApplicationRoleConnectionMetadataType {
  IntegerLessThanOrEqual = 1,
  IntegerGreaterThanOrEqual,
  IntegerEqual,
  IntegerNotEqual,
  DatetimeLessThanOrEqual,
  DatetimeGreaterThanOrEqual,
  BooleanEqual,
  BooleanNotEqual,
}
