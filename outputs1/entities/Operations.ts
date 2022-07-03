import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tokens } from "./Tokens";

@Index("Operations_pkey", ["id"], { unique: true })
@Entity("Operations", { schema: "public" })
export class Operations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("numeric", { name: "amount" })
  amount: string;

  @Column("character varying", { name: "type", length: 255 })
  type: string;

  @Column("integer", { name: "accountId" })
  accountId: number;

  @Column("jsonb", { name: "meta" })
  meta: object;

  @Column("boolean", { name: "isHold" })
  isHold: boolean;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Tokens, (tokens) => tokens.operations)
  @JoinColumn([{ name: "tokenId", referencedColumnName: "id" }])
  token: Tokens;
}
