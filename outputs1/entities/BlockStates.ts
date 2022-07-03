import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("chain_type_index", ["chainType"], { unique: true })
@Index("BlockStates_pkey", ["id"], { unique: true })
@Entity("BlockStates", { schema: "public" })
export class BlockStates {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "block_number", nullable: true })
  blockNumber: number | null;

  @Column("character varying", {
    name: "block_type",
    nullable: true,
    length: 255,
  })
  blockType: string | null;

  @Column("character varying", {
    name: "chain_type",
    nullable: true,
    length: 255,
  })
  chainType: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", {
    name: "block_hash",
    nullable: true,
    length: 255,
  })
  blockHash: string | null;
}
