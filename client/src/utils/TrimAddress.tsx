export const trimAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
