
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

// record
type RecordType = Record<string, unknown>;

// index-signature
interface IndexSignatureInterface {
  [key: string]: unknown;
}

type IndexSignatureType = {
  [key: string]: unknown;
};

type MappedType = {
  [key in string]: unknown;
};
