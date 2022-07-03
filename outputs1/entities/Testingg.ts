import { Column, Entity } from "typeorm";

@Entity("testingg", { schema: "public" })
export class Testingg {
  @Column("character varying", { name: "val", nullable: true, length: 255 })
  val: string | null;
}
