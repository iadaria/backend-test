import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("P2PReviews_pkey", ["id"], { unique: true })
@Entity("P2PReviews", { schema: "public" })
export class P2PReviews {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "author_id" })
  authorId: number;

  @Column("integer", { name: "target_user_id" })
  targetUserId: number;

  @Column("integer", { name: "order_id" })
  orderId: number;

  @Column("integer", { name: "rating" })
  rating: number;

  @Column("character varying", { name: "comment", length: 255 })
  comment: string;

  @Column("character varying", {
    name: "original_comment",
    nullable: true,
    length: 255,
  })
  originalComment: string | null;

  @Column("integer", { name: "censored_by", nullable: true })
  censoredBy: number | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
