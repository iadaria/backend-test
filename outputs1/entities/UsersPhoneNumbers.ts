import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UsersPhoneNumbers_pkey", ["id"], { unique: true })
@Index("unique_users_phones", ["phone", "userId"], { unique: true })
@Entity("UsersPhoneNumbers", { schema: "public" })
export class UsersPhoneNumbers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("boolean", { name: "is_verified", nullable: true })
  isVerified: boolean | null;

  @Column("character varying", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
