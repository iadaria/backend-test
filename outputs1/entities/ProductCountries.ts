import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AvailableCountries } from "./AvailableCountries";
import { Orders } from "./Orders";

@Index("ProductCountries_pkey", ["id"], { unique: true })
@Entity("ProductCountries", { schema: "public" })
export class ProductCountries {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "ru_name", nullable: true, length: 255 })
  ruName: string | null;

  @Column("character varying", { name: "en_name", nullable: true, length: 255 })
  enName: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(
    () => AvailableCountries,
    (availableCountries) => availableCountries.country
  )
  availableCountries: AvailableCountries[];

  @OneToMany(() => Orders, (orders) => orders.country)
  orders: Orders[];
}
