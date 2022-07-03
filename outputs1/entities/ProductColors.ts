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

@Index("ProductColors_pkey", ["id"], { unique: true })
@Entity("ProductColors", { schema: "public" })
export class ProductColors {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("text", { name: "country", nullable: true })
  country: string | null;

  @Column("character varying", {
    name: "image_url",
    nullable: true,
    length: 255,
  })
  imageUrl: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => BasketItems, (basketItems) => basketItems.color)
  basketItems: BasketItems[];

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.color)
  orderProducts: OrderProducts[];

  @ManyToOne(() => Products, (products) => products.productColors)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
