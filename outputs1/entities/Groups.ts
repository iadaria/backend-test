import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("Groups_pkey", ["id"], { unique: true })
@Entity("Groups", { schema: "public" })
export class Groups {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp with time zone", { name: "date_end", nullable: true })
  dateEnd: Date | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
