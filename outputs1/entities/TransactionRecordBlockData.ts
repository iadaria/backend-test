import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("TransactionRecordBlockData_pkey", ["id"], { unique: true })
@Entity("TransactionRecordBlockData", { schema: "public" })
export class TransactionRecordBlockData {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "currency",
    nullable: true,
    length: 255,
  })
  currency: string | null;

  @Column("integer", { name: "height", nullable: true })
  height: number | null;

  @Column("integer", { name: "prev_height", nullable: true })
  prevHeight: number | null;

  @Column("character varying", {
    name: "prev_block",
    nullable: true,
    length: 255,
  })
  prevBlock: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
