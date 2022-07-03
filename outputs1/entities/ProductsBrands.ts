import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@Index("ProductsBrands_pkey", ["id"], { unique: true })
@Index("ProductsBrands_name_key", ["name"], { unique: true })
@Entity("ProductsBrands", { schema: "public" })
export class ProductsBrands {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", unique: true, length: 255 })
  name: string;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => Products, (products) => products.brand)
  products: Products[];
}
