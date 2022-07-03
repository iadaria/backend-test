import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unique_product_ambassador_level", ["ambassadorLevel", "product"], {
  unique: true,
})
@Index("CumulativeDiscounts_pkey", ["id"], { unique: true })
@Index("unique_product_loyalty_level", ["loyaltyLevel", "product"], {
  unique: true,
})
@Entity("CumulativeDiscounts", { schema: "public" })
export class CumulativeDiscounts {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("enum", {
    name: "product",
    enum: ["Amir Travel", "Amir Guard", "Amir Smart"],
  })
  product: "Amir Travel" | "Amir Guard" | "Amir Smart";

  @Column("integer", { name: "ambassador_level", nullable: true })
  ambassadorLevel: number | null;

  @Column("character varying", {
    name: "loyalty_level",
    nullable: true,
    length: 255,
  })
  loyaltyLevel: string | null;

  @Column("integer", { name: "value", default: () => "0" })
  value: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
