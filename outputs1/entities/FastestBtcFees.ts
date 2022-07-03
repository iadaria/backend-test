import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("FastestBtcFees_pkey", ["id"], { unique: true })
@Entity("FastestBtcFees", { schema: "public" })
export class FastestBtcFees {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "height", nullable: true })
  height: number | null;

  @Column("integer", { name: "fee", nullable: true })
  fee: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
