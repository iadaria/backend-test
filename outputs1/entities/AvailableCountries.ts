import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductCountries } from "./ProductCountries";
import { Products } from "./Products";

@Index("AvailableCountries_pkey", ["id"], { unique: true })
@Entity("AvailableCountries", { schema: "public" })
export class AvailableCountries {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(
    () => ProductCountries,
    (productCountries) => productCountries.availableCountries
  )
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country: ProductCountries;

  @ManyToOne(() => Products, (products) => products.availableCountries)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
