import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductCountries } from "./ProductCountries";
import { SolarIncomes } from "./SolarIncomes";

@Index("Orders_pkey", ["id"], { unique: true })
@Entity("Orders", { schema: "public" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Column("character varying", { name: "notes", nullable: true, length: 255 })
  notes: string | null;

  @Column("numeric", { name: "total_price" })
  totalPrice: string;

  @Column("character varying", { name: "status", length: 255 })
  status: string;

  @Column("character varying", {
    name: "cancel_reason",
    nullable: true,
    length: 255,
  })
  cancelReason: string | null;

  @Column("integer", { name: "account_id" })
  accountId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "email", length: 255 })
  email: string;

  @Column("character varying", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("boolean", {
    name: "is_refunded",
    nullable: true,
    default: () => "false",
  })
  isRefunded: boolean | null;

  @Column("text", { name: "recipient", nullable: true })
  recipient: string | null;

  @Column("character varying", {
    name: "tracking_number",
    nullable: true,
    length: 255,
  })
  trackingNumber: string | null;

  @Column("character varying", {
    name: "tracking_link",
    nullable: true,
    length: 255,
  })
  trackingLink: string | null;

  @ManyToOne(
    () => ProductCountries,
    (productCountries) => productCountries.orders
  )
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country: ProductCountries;

  @OneToMany(() => SolarIncomes, (solarIncomes) => solarIncomes.order)
  solarIncomes: SolarIncomes[];
}
