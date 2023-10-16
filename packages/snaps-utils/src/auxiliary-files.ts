import { bytesToHex } from '@metamask/utils';
import { base64 } from '@scure/base';

export enum AuxiliaryFileEncoding {
  Base64 = 'base64',
  Hex = 'hex',
}

/**
 * Re-encodes an auxiliary file if needed depending on the requested file encoding.
 *
 * @param value - The base64 value stored for the auxiliary file.
 * @param encoding - The chosen encoding.
 * @returns The file encoded in the requested encoding.
 */
export function encodeAuxiliaryFile(
  value: string,
  encoding: AuxiliaryFileEncoding,
) {
  // Input is assumed to be the stored file in base64.
  if (encoding === AuxiliaryFileEncoding.Base64) {
    return value;
  }

  // TODO: Use @metamask/utils for this
  // For now, the requested encoding here will always be hex.
  const decoded = base64.decode(value);
  return bytesToHex(decoded);
}