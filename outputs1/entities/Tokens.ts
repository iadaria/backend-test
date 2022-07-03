import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Operations } from "./Operations";

@Index("Tokens_code_key", ["code"], { unique: true })
@Index("Tokens_pkey", ["id"], { unique: true })
@Entity("Tokens", { schema: "public" })
export class Tokens {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("character varying", { name: "code", unique: true, length: 255 })
  code: string;

  @Column("timestamp with time zone", { name: "startAt" })
  startAt: Date;

  @Column("integer", { name: "totalSupply" })
  totalSupply: number;

  @Column("double precision", { name: "price", precision: 53 })
  price: number;

  @Column("integer", { name: "ownerId" })
  ownerId: number;

  @Column("boolean", { name: "isPublished" })
  isPublished: boolean;

  @Column("jsonb", {
    name: "availableUserSunriseStatus",
    nullable: true,
    default: [],
  })
  availableUserSunriseStatus: object | null;

  @Column("jsonb", {
    name: "availableUserAmbassadorLevel",
    nullable: true,
    default: [],
  })
  availableUserAmbassadorLevel: object | null;

  @Column("timestamp with time zone", { name: "endAt" })
  endAt: Date;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("jsonb", {
    name: "availablePayments",
    nullable: true,
    default: ["usdt"],
  })
  availablePayments: object | null;

  @Column("character varying", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("double precision", {
    name: "usdtAmountCondition",
    nullable: true,
    precision: 53,
  })
  usdtAmountCondition: number | null;

  @Column("double precision", {
    name: "buyUsdtMinAmount",
    nullable: true,
    precision: 53,
  })
  buyUsdtMinAmount: number | null;

  @Column("double precision", {
    name: "buyUsdtMaxAmount",
    nullable: true,
    precision: 53,
  })
  buyUsdtMaxAmount: number | null;

  @Column("double precision", {
    name: "coefficient",
    nullable: true,
    precision: 53,
  })
  coefficient: number | null;

  @OneToMany(() => Operations, (operations) => operations.token)
  operations: Operations[];
}
