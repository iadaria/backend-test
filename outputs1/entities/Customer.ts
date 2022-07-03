import { Column, Entity } from "typeorm";

@Entity("customer", { schema: "public" })
export class Customer {
  @Column("text", { name: "custname", nullable: true })
  custname: string | null;

  @Column("text", { name: "loanno", nullable: true })
  loanno: string | null;
}
