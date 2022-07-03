import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { Products } from "./Products";

@Index("Bookmarks_pkey", ["id"], { unique: true })
@Entity("Bookmarks", { schema: "public" })
export class Bookmarks {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.bookmarks)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;

  @ManyToOne(() => Products, (products) => products.bookmarks)
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
