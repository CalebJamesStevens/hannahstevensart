import { StaticImageData } from "next/image";
import SufficientMind from "../../public/art/SufficientMind.jpeg"

export type ArtPiece = {
  title: string;
  img: StaticImageData;
  description: string;
  price: number;
  originalPrice?: number;
};

export const artPieces: ArtPiece[] = [
  {
    img: SufficientMind,
    title: "Sufficient Mind",
    description: "This piece is the first I have made since before my daughter was born. I felt inspired to create again and have been wanting to experiment with acrylic paint for awhile now. I decided to combine two of my favorite things to draw, flowers and portraits, and do a combo of paint and sketching to create this.",
    price: 50,
    originalPrice: undefined,
  }
];