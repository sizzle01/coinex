export const trimAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(
    address.length - 5,
    address.length
  )}`;
