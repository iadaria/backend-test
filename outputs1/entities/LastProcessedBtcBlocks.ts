import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("LastProcessedBtcBlocks_pkey", ["id"], { unique: true })
@Entity("LastProcessedBtcBlocks", { schema: "public" })
export class LastProcessedBtcBlocks {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "height", nullable: true })
  height: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
