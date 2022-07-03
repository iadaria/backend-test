import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductColors } from "./ProductColors";
import { ProductOptions } from "./ProductOptions";

@Index("OrderProducts_pkey", ["id"], { unique: true })
@Entity("OrderProducts", { schema: "public" })
export class OrderProducts {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("integer", { name: "order_id" })
  orderId: number;

  @Column("integer", { name: "product_id" })
  productId: number;

  @Column("integer", { name: "price" })
  price: number;

  @Column("integer", { name: "quantity" })
  quantity: number;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("numeric", {
    name: "price_usdt",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  priceUsdt: string | null;

  @ManyToOne(
    () => ProductColors,
    (productColors) => productColors.orderProducts
  )
  @JoinColumn([{ name: "color", referencedColumnName: "id" }])
  color: ProductColors;

  @ManyToOne(
    () => ProductOptions,
    (productOptions) => productOptions.orderProducts
  )
  @JoinColumn([{ name: "option", referencedColumnName: "id" }])
  option: ProductOptions;
}
