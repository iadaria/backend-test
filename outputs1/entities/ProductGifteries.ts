import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderGifteries } from "./OrderGifteries";
import { Products } from "./Products";

@Index("ProductGifteries_pkey", ["id"], { unique: true })
@Entity("ProductGifteries", { schema: "public" })
export class ProductGifteries {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("jsonb", { name: "faces", nullable: true })
  faces: object | null;

  @Column("numeric", {
    name: "face_step",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  faceStep: string | null;

  @Column("numeric", {
    name: "face_min",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  faceMin: string | null;

  @Column("numeric", {
    name: "face_max",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  faceMax: string | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("character varying", { name: "url", nullable: true, length: 255 })
  url: string | null;

  @Column("integer", { name: "supplier_id", nullable: true })
  supplierId: number | null;

  @OneToMany(() => OrderGifteries, (orderGifteries) => orderGifteries.product)
  orderGifteries: OrderGifteries[];

  @ManyToOne(() => Products, (products) => products.productGifteries, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
