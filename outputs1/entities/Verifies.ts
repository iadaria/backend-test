import {Column,Entity,Index,PrimaryGeneratedColumn} from "typeorm";


@Index("Verifies_pkey",["id",],{ unique:true })
@Entity("Verifies" ,{schema:"public" } )
export  class Verifies {

@PrimaryGeneratedColumn({ type:"integer", name:"id" })
id:number;

@Column("jsonb",{ name:"data",nullable:true })
data:object | null;

@Column("enum",{ name:"medium",nullable:true,enum:["sms","email","google"],default: () => "'sms'"enum_Verifies_medium"", })
medium:"sms" | "email" | "google" | null;

@Column("character varying",{ name:"topic",nullable:true,length:255 })
topic:string | null;

@Column("character varying",{ name:"code",nullable:true,length:255 })
code:string | null;

@Column("integer",{ name:"account_id",nullable:true })
accountId:number | null;

@Column("timestamp with time zone",{ name:"expired_at",nullable:true })
expiredAt:Date | null;

@Column("boolean",{ name:"used",default: () => "false", })
used:boolean;

@Column("integer",{ name:"attempt_count",default: () => "0", })
attemptCount:number;

@Column("timestamp with time zone",{ name:"createdAt" })
createdAt:Date;

@Column("timestamp with time zone",{ name:"updatedAt" })
updatedAt:Date;

}
