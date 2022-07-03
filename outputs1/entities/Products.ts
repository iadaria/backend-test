import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AvailableCountries } from "./AvailableCountries";
import { BasketItems } from "./BasketItems";
import { Bookmarks } from "./Bookmarks";
import { ProductCategories } from "./ProductCategories";
import { ProductColors } from "./ProductColors";
import { ProductGifteries } from "./ProductGifteries";
import { ProductOptions } from "./ProductOptions";
import { ProductsBrands } from "./ProductsBrands";
import { Accounts } from "./Accounts";
import { ServerConfigurations } from "./ServerConfigurations";

@Index("Products_pkey", ["id"], { unique: true })
@Entity("Products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("numeric", {
    name: "price",
    nullable: true,
    precision: 100,
    scale: 2,
  })
  price: string | null;

  @Column("character varying", { name: "picture", nullable: true, length: 255 })
  picture: string | null;

  @Column("jsonb", { name: "images", nullable: true })
  images: object | null;

  @Column("boolean", { name: "featured", nullable: true })
  featured: boolean | null;

  @Column("boolean", { name: "published", nullable: true })
  published: boolean | null;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "category", nullable: true })
  category: number | null;

  @Column("text", { name: "html_title", nullable: true })
  htmlTitle: string | null;

  @Column("text", { name: "all_description", nullable: true })
  allDescription: string | null;

  @Column("jsonb", { name: "prices", nullable: true })
  prices: object | null;

  @Column("text", { name: "recommended_category", nullable: true })
  recommendedCategory: string | null;

  @Column("jsonb", { name: "images_by_color", nullable: true, default: {} })
  imagesByColor: object | null;

  @Column("boolean", {
    name: "is_promo",
    nullable: true,
    default: () => "false",
  })
  isPromo: boolean | null;

  @Column("character varying", {
    name: "certificate_type",
    nullable: true,
    length: 255,
  })
  certificateType: string | null;

  @Column("numeric", {
    name: "price_usdt",
    nullable: true,
    precision: 100,
    scale: 40,
  })
  priceUsdt: string | null;

  @Column("character varying", {
    name: "review_status",
    nullable: true,
    length: 255,
  })
  reviewStatus: string | null;

  @Column("character varying", {
    name: "review_comment",
    nullable: true,
    length: 255,
  })
  reviewComment: string | null;

  @Column("boolean", { name: "is_vip", default: () => "false" })
  isVip: boolean;

  @Column("character varying", {
    name: "picture_mobile",
    nullable: true,
    length: 255,
  })
  pictureMobile: string | null;

  @Column("jsonb", { name: "images_mobile", nullable: true })
  imagesMobile: object | null;

  @Column("boolean", { name: "hide_on_ios", default: () => "false" })
  hideOnIos: boolean;

  @OneToMany(
    () => AvailableCountries,
    (availableCountries) => availableCountries.product
  )
  availableCountries: AvailableCountries[];

  @OneToMany(() => BasketItems, (basketItems) => basketItems.product)
  basketItems: BasketItems[];

  @OneToMany(() => Bookmarks, (bookmarks) => bookmarks.product)
  bookmarks: Bookmarks[];

  @OneToMany(
    () => ProductCategories,
    (productCategories) => productCategories.product
  )
  productCategories: ProductCategories[];

  @OneToMany(() => ProductColors, (productColors) => productColors.product)
  productColors: ProductColors[];

  @OneToMany(
    () => ProductGifteries,
    (productGifteries) => productGifteries.product
  )
  productGifteries: ProductGifteries[];

  @OneToMany(() => ProductOptions, (productOptions) => productOptions.product)
  productOptions: ProductOptions[];

  @ManyToOne(() => ProductsBrands, (productsBrands) => productsBrands.products)
  @JoinColumn([{ name: "brand", referencedColumnName: "id" }])
  brand: ProductsBrands;

  @ManyToOne(() => Accounts, (accounts) => accounts.products)
  @JoinColumn([{ name: "seller_id", referencedColumnName: "id" }])
  seller: Accounts;

  @OneToMany(
    () => ServerConfigurations,
    (serverConfigurations) => serverConfigurations.sunnybook
  )
  serverConfigurations: ServerConfigurations[];
}
