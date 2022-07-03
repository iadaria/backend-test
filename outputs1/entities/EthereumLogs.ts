import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("EthereumLogs_pkey", ["id"], { unique: true })
@Entity("EthereumLogs", { schema: "public" })
export class EthereumLogs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "info", nullable: true })
  info: string | null;

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
