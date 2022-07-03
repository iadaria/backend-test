import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unique_users_applicants", ["applicantId", "userId"], { unique: true })
@Index("ApplicantData_pkey", ["id"], { unique: true })
@Entity("ApplicantData", { schema: "public" })
export class ApplicantData {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("character varying", {
    name: "applicant_id",
    nullable: true,
    length: 255,
  })
  applicantId: string | null;

  @Column("character varying", { name: "dob", nullable: true, length: 255 })
  dob: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("character varying", { name: "gender", nullable: true, length: 255 })
  gender: string | null;

  @Column("character varying", { name: "lang", nullable: true, length: 255 })
  lang: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
