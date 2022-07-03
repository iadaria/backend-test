import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { ProductColors } from "./ProductColors";
import { ProductOptions } from "./ProductOptions";
import { Products } from "./Products";

@Index("BasketItems_pkey", ["id"], { unique: true })
@Entity("BasketItems", { schema: "public" })
export class BasketItems {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.basketItems)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(() => ProductColors, (productColors) => productColors.basketItems)
  @JoinColumn([{ name: "color", referencedColumnName: "id" }])
  color: ProductColors;

  @ManyToOne(
    () => ProductOptions,
    (productOptions) => productOptions.basketItems
  )
  @JoinColumn([{ name: "option", referencedColumnName: "id" }])
  option: ProductOptions;

  @ManyToOne(() => Products, (products) => products.basketItems)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
