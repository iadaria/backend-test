import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasketItems } from "./BasketItems";
import { OrderProducts } from "./OrderProducts";
import { Products } from "./Products";

@Index("ProductOptions_pkey", ["id"], { unique: true })
@Entity("ProductOptions", { schema: "public" })
export class ProductOptions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("jsonb", { name: "image_url", nullable: true, default: [] })
  imageUrl: object | null;

  @Column("integer", { name: "price" })
  price: number;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "country", nullable: true })
  country: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("numeric", {
    name: "price_usdt",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  priceUsdt: string | null;

  @Column("text", { name: "param_name", nullable: true })
  paramName: string | null;

  @OneToMany(() => BasketItems, (basketItems) => basketItems.option)
  basketItems: BasketItems[];

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.option)
  orderProducts: OrderProducts[];

  @ManyToOne(() => Products, (products) => products.productOptions)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
