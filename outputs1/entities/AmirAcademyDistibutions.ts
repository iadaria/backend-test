import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("AmirAcademyDistibutions_pkey", ["id"], { unique: true })
@Entity("AmirAcademyDistibutions", { schema: "public" })
export class AmirAcademyDistibutions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "recipient_email",
    nullable: true,
    length: 255,
  })
  recipientEmail: string | null;

  @Column("timestamp with time zone", {
    name: "date_of_accrual",
    nullable: true,
  })
  dateOfAccrual: Date | null;

  @Column("character varying", { name: "amount", nullable: true, length: 255 })
  amount: string | null;

  @Column("character varying", {
    name: "course_title",
    nullable: true,
    length: 255,
  })
  courseTitle: string | null;

  @Column("character varying", { name: "reason", nullable: true, length: 255 })
  reason: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
