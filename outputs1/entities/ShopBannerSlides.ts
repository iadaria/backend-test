import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("ShopBannerSlides_pkey", ["id"], { unique: true })
@Entity("ShopBannerSlides", { schema: "public" })
export class ShopBannerSlides {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("character varying", {
    name: "desktop_image",
    nullable: true,
    length: 255,
  })
  desktopImage: string | null;

  @Column("character varying", {
    name: "mobile_image",
    nullable: true,
    length: 255,
  })
  mobileImage: string | null;

  @Column("timestamp with time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Accounts, (accounts) => accounts.shopBannerSlides)
  @JoinColumn([{ name: "added_by", referencedColumnName: "id" }])
  addedBy: Accounts;

  @ManyToOne(() => Accounts, (accounts) => accounts.shopBannerSlides2)
  @JoinColumn([{ name: "deleted_by", referencedColumnName: "id" }])
  deletedBy: Accounts;

  @ManyToOne(() => Accounts, (accounts) => accounts.shopBannerSlides3)
  @JoinColumn([{ name: "last_edit_by", referencedColumnName: "id" }])
  lastEditBy: Accounts;
}
