import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ShopCategories } from "./ShopCategories";
import { Products } from "./Products";

@Index(
  "unique_product_categories_product_id_and_category_id",
  ["categoryId", "productId"],
  { unique: true }
)
@Index("ProductCategories_pkey", ["id"], { unique: true })
@Entity("ProductCategories", { schema: "public" })
export class ProductCategories {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("integer", { name: "category_id", nullable: true })
  categoryId: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(
    () => ShopCategories,
    (shopCategories) => shopCategories.productCategories
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "id" }])
  category: ShopCategories;

  @ManyToOne(() => Products, (products) => products.productCategories)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
