import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IndicesQueues_pkey", ["id"], { unique: true })
@Entity("IndicesQueues", { schema: "public" })
export class IndicesQueues {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "fund", nullable: true, length: 255 })
  fund: string | null;

  @Column("character varying", { name: "index", nullable: true, length: 255 })
  index: string | null;

  @Column("boolean", { name: "is_old", nullable: true })
  isOld: boolean | null;

  @Column("integer", { name: "group", nullable: true })
  group: number | null;

  @Column("boolean", { name: "skip", nullable: true })
  skip: boolean | null;

  @Column("boolean", { name: "is_processed", default: () => "false" })
  isProcessed: boolean;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
