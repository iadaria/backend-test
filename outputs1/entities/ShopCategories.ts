import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductCategories } from "./ProductCategories";

@Index("ShopCategories_pkey", ["id"], { unique: true })
@Entity("ShopCategories", { schema: "public" })
export class ShopCategories {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => ProductCategories,
    (productCategories) => productCategories.category
  )
  productCategories: ProductCategories[];
}
