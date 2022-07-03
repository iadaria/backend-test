import {Column,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import {Accounts} from './Accounts'
import {Products} from './Products'


@Index("ServerConfigurations_pkey",["id",],{ unique:true })
@Entity("ServerConfigurations" ,{schema:"public" } )
export  class ServerConfigurations {

@PrimaryGeneratedColumn({ type:"integer", name:"id" })
id:number;

@Column("enum",{ name:"sms_service_global_override",enum:["none","twilio","intis"],default: () => "'none'"enum_ServerConfigurations_sms_service_global_override"", })
smsServiceGlobalOverride:"none" | "twilio" | "intis";

@Column("timestamp with time zone",{ name:"createdAt" })
createdAt:Date;

@Column("timestamp with time zone",{ name:"updatedAt" })
updatedAt:Date;

@Column("character varying",{ name:"btc_sender_minimum",nullable:true,length:255 })
btcSenderMinimum:string | null;

@Column("character varying",{ name:"eth_sender_minimum",nullable:true,length:255 })
ethSenderMinimum:string | null;

@Column("character varying",{ name:"usdt_omni_sender_minimum",nullable:true,length:255 })
usdtOmniSenderMinimum:string | null;

@Column("character varying",{ name:"usdt_erc20_sender_minimum",nullable:true,length:255 })
usdtErc20SenderMinimum:string | null;

@Column("character varying",{ name:"btc_fee_deactivation_threshold",nullable:true,length:255 })
btcFeeDeactivationThreshold:string | null;

@Column("character varying",{ name:"eth_fee_deactivation_threshold",nullable:true,length:255 })
ethFeeDeactivationThreshold:string | null;

@Column("character varying",{ name:"usdt_omni_fee_deactivation_threshold",nullable:true,length:255 })
usdtOmniFeeDeactivationThreshold:string | null;

@Column("character varying",{ name:"usdt_erc20_fee_deactivation_threshold",nullable:true,length:255 })
usdtErc20FeeDeactivationThreshold:string | null;

@Column("character varying",{ name:"usdt_trc_20_fee",nullable:true,length:255 })
usdtTrc_20Fee:string | null;

@Column("character varying",{ name:"usdt_trc20_fee_deactivation_threshold",nullable:true,length:255 })
usdtTrc20FeeDeactivationThreshold:string | null;

@Column("integer",{ name:"sunnybook_option",nullable:true })
sunnybookOption:number | null;

@Column("character varying",{ name:"btc_withdraw_limit",nullable:true,length:255 })
btcWithdrawLimit:string | null;

@Column("character varying",{ name:"eth_withdraw_limit",nullable:true,length:255 })
ethWithdrawLimit:string | null;

@Column("character varying",{ name:"usdt_withdraw_limit",nullable:true,length:255 })
usdtWithdrawLimit:string | null;

@Column("boolean",{ name:"allowed_email_changing",nullable:true })
allowedEmailChanging:boolean | null;

@Column("boolean",{ name:"allowed_phone_changing",nullable:true })
allowedPhoneChanging:boolean | null;

@ManyToOne(()=>Accounts,accounts=>accounts.serverConfigurations)
@JoinColumn([{ name: "notify_admin_id", referencedColumnName: "id" },
])

notifyAdmin:Accounts;

@ManyToOne(()=>Products,products=>products.serverConfigurations)
@JoinColumn([{ name: "sunnybook_id", referencedColumnName: "id" },
])

sunnybook:Products;

}
