var a = {
    
			// bargain:{
			// 	name:'砍价模块',
			// 	max:'1',
			// 	icon:'#iconkanjiamokuai',
			// 	params:{
			// 		navstyle:'1',
			// 		styledata:'0',
			// 		repeat:'repeat',
			// 		positionx:'left',
			// 		positiony:'top',
			// 		size:'0',
			// 		backgroundimg:'',
			// 		goodsdata:1,
			// 		goodsnum:2,
			// 		con_key:'1',
    		// 		con_type:'1'
		   	// 	},
		   	// 	style:{
		   	// 		background:'#ffffff',
		   	// 		pdw:'10',
		   	// 		pdh:'10',
		   	// 		mb:'10',
		   	// 		mt:'10',
		   	// 		sizew:'20',
			// 		sizeh:'20',
			// 		pich:'1',
			// 		showtype:'0'
		   	// 	},
		   	// 	data: {
		   	// 		C0123456789101:{
		   	// 			imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',
		   	// 			title:'砍价商品标题',
		   	// 			description:'砍价商品简介',
		   	// 			count:'200',
		   	// 			price:'99',
		   	// 			hour:10,
		   	// 			min:11,
		   	// 			second:12,
		   	// 			person:'2',
		   	// 			tz:'92',
		   	// 			tgr:'427',
		   	// 			tgj:'56.00',
		   	// 			linkurl:'',
		   	// 			linktype:''
		   	// 		},
		   	// 		C0123456789102:{
		   	// 			imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',
		   	// 			title:'砍价商品标题',
		   	// 			description:'砍价商品简介',
		   	// 			count:'200',
		   	// 			price:'99',
		   	// 			hour:10,
		   	// 			min:11,
		   	// 			second:12,
		   	// 			person:'2',
		   	// 			tz:'92',
		   	// 			tgr:'427',
		   	// 			tgj:'56.00',
		   	// 			linkurl:'',
		   	// 			linktype:''
		   	// 		},
		   	// 		C0123456789103:{
		   	// 			imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',
		   	// 			title:'砍价商品标题',
		   	// 			description:'砍价商品简介',
		   	// 			count:'200',
		   	// 			price:'99',
		   	// 			hour:10,	
		   	// 			min:11,
		   	// 			second:12,
		   	// 			person:'2',
		   	// 			tz:'92',
		   	// 			tgr:'427',
		   	// 			tgj:'56.00',
		   	// 			linkurl:'',
		   	// 			linktype:''
		   	// 		},
		   	// 	}
			// },
			// ad:{
            //     name: '流量主',
            //     icon: 'iconfont2 icon-shipin1',
            //     style: {
            //         mt:'10',
            //         paddingleft:'10',
            //         paddingtop:'10'
            //     },
            //     params: {
            //         adid: '0',
            //     }
           	// },

			notice: {

				name: '公告',

				icon: '#icongonggao',

				params: {

					iconurl: ASSETS+'resource/images/diypage/default/remind.png',

					noticedata: '0',

					speed: '4',

					noticenum: '5',

					navstyle:'1',

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					iconurl:'icon-x-gonggao5'

				},

				style: {

					background: '#ffffff',

					iconcolor: '#ff4a47',

					color: '#434343',

					bordercolor: '#e2e2e2',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					paddingtop:'10',

					paddingleft:'10',

				},

				data: {

					C0123456789101: {

						title: '这里是第一条自定义公告的标题',

						linkurl: '',

					},

					C0123456789102: {

						title: '这里是第二条自定义公告的标题',

						linkurl: '',

					}

				}

			},
			title2:{
				name:'主副标题',
				icon: '#iconzhufubiaoti',
				params:{
					title: '主标题',

					title2:'副标题描述',
					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',
					style:'1'
				},
				style:{
					background: '#ffffff',

					colorz: '#434343',

					colorf:'#838383',

					linecolor:'#434343',
					fontsizez: '14',

					fontsizef: '12',

					paddingtop: '10',

					paddingleft: '10',

					sizew:'20',

					sizeh:'20',

					mt:'10'
				}
			},
			bigimg: {

				name: '大图展示',

				icon: '#icondatuzhanshi',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:''

				},

				style: {

					paddingtop: '10',

					paddingleft: '10',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					background:'#ffffff',
					borderradius:'5'

				},

				data: {

					C0123456789101: {
						imgurl: ASSETS+'resource/images/diypage/default/bigimgshow.jpg',

						linkurl: '',
						title:'主标题一',
						text:'副标题描述'

					},

				}

			},
			logo:{
			   	name:'头部样式',
			   	icon:'#icontoubuyangshi',
			   	params:{
					src:ASSETS+'resource/images/diypage/default/shop_img_new.png',

		   			title:'店铺名称',
		   			intro:'店铺简介',

		   			linkurl:'',

		   			styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'1',

					backgroundimg:ASSETS+'resource/images/diypage/default/shop_bg.png',
					phonenum:'12345678910',
					style:'1',
					urltitle:'进入店铺',
			   	},
			   	style:{
			   		

					pdh:'10',

		   			pdz:'10',

		   			bg:'#ffffff',

		   			mt:'10',

		   			sizew:'20',

					sizeh:'20',
					titlecolor:'#434343',
					introcolor:'#939393',
					phonebg:'#f5f5f5',
					phonecolor:'#838383',
					ljfz:'12',
					introfz:'12',
		   			dpfz:'14',
		   			imgwidth:'40',
		   			phonenumfz:'12',
		   			ljcolor:'#bfbfbf'

			   	}
		   },
			classfit:{
				name:'图文广告',
				icon:'#icontuwenguanggao',
				params:{
					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',
				},
				style:{
					background:'#ffffff',

		   			pdw:'5',

		   			pdh:'5',
		   			
		   			mt:'10',

		   			sizew:'20',

					sizeh:'20',

				},
				data:{

					C0123456789101:{

						imgurl:ASSETS+'resource/images/diypage/default/classfit_1.png',
						title:'主标题',
						text:'副标题描述',
						bg1:'#eeeeee',
						bg2:'#eeeeee',
					},

					C0123456789102:{

						imgurl:ASSETS+'resource/images/diypage/default/classfit_2.png',
						title:'主标题',
						text:'副标题描述',
						bg1:'#eeeeee',
						bg2:'#eeeeee',
					},

					C0123456789103:{

						imgurl:ASSETS+'resource/images/diypage/default/classfit_3.png',
						title:'主标题',
						text:'副标题描述',
						bg1:'#eeeeee',
						bg2:'#eeeeee',
					},

					C0123456789104:{

						imgurl:ASSETS+'resource/images/diypage/default/classfit_4.png',
						title:'主标题',
						text:'副标题描述',
						bg1:'#eeeeee',
						bg2:'#eeeeee',
					},

				}

			},
			personlist:{
				name:'名片列表',
				icon:'#iconmingpianliebiao',
				params:{
					styledata:'0',
					repeat:'repeat',
					positionx:'left',
					positiony:'top',
					size:'0',
					backgroundimg:'',
					goodsnum:'4'
				},
				style:{
					background:'#ffffff',
		   			pdw:'10',
		   			pdh:'10',
		   			mt:'10',
		   			sizew:'20',
					sizeh:'20',
				},
				data: {
		   			C0123456789101:{
		   				imgurl:ASSETS+'resource/images/diypage/default/personlist_tx.png',
		   			},
		   			C0123456789102:{
		   				imgurl:ASSETS+'resource/images/diypage/default/personlist_tx.png',
		   			},
		   			C0123456789103:{
		   				imgurl:ASSETS+'resource/images/diypage/default/personlist_tx.png',
		   			},
		   		}
			},
			

			service:{

				name:'服务中心',

				icon:'#iconfuwuzhongxin', 

				params:{

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					title:'服务中心',
					etitle:'Service Center'

				},

				style:{

					background:'#ffffff',

		   			pdw:'10',

		   			pdh:'10',

		   			mt:'10',

		   			sizew:'20',

					sizeh:'20',

					pdz:'5',

					fs:'14',

					borderradius:'4',
					fontsizet:'16',
					fontsizee:'14',

					colort:'#434343',
					colore:'#939393',

				},

				data:{

					C0123456789101:{

						text:'一键拨号',

						btnbg:'#7ad4d2',

						bordercolor:'#7ad4d2',

						textcolor:'#ffffff',

						linkurl:'',

		   				linktype:'',

					},

					C0123456789102:{

						text:'一键导航',

						btnbg:'#f4bd55',

						bordercolor:'#f4bd55',

						textcolor:'#ffffff',

						linkurl:'',

		   				linktype:'',

					},

					C0123456789103:{

						text:'立即预约',

						btnbg:'#f092a7',

						bordercolor:'#f092a7',

						textcolor:'#ffffff',

						linkurl:'',

		   				linktype:'',

					},

					C0123456789104:{

						text:'微信咨询',

						btnbg:'#72bafa',

						bordercolor:'#72bafa',

						textcolor:'#ffffff',

						linkurl:'',

		   				linktype:'',

					},

				}

			},

			msmk:{

				max:1,

				name:'秒杀模块',

				max:'1',

				icon:'#iconmiaoshamokuai',

				params:{

		   			navstyle:'1',

		   			styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					goodsdata:1,

					goodsnum:2,

					con_key:'1',

    				con_type:'1',

		   		},

		   		style:{

		   			background:'#ffffff',

		   			pdw:'10',

		   			pdh:'10',

		   			mb:'10',

		   			mt:'10',

		   			sizew:'20',

					sizeh:'20',

					pich:'1',

					showtype:'0'

		   		},

		   		data: {

		   			C0123456789101:{

		   				imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',

		   				title:'秒杀商品标题',

		   				description:'秒杀商品简介',

		   				count:'927',

		   				price:'21',

		   				hour:10,

		   				min:11,

		   				second:12,

		   				person:'2',

		   				tz:'92',

		   				tgr:'427',

		   				tgj:'17.2',

		   				linkurl:'',

		   				linktype:''

		   			},

		   			C0123456789102:{

		   				imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',

		   				title:'秒杀商品标题',

		   				description:'秒杀商品简介',

		   				count:'927',

		   				price:'21',

		   				hour:10,

		   				min:11,

		   				second:12,

		   				person:'2',

		   				tz:'92',

		   				tgr:'427',

		   				tgj:'17.2',

		   				linkurl:'',

		   				linktype:''

		   			},

		   			C0123456789103:{

		   				imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',

		   				title:'秒杀商品标题',

		   				description:'秒杀商品简介',

		   				count:'927',

		   				price:'21',

		   				hour:10,

		   				min:11,

		   				second:12,

		   				person:'2',

		   				tz:'92',

		   				tgr:'427',

		   				tgj:'17.2',

		   				linkurl:'',

		   				linktype:''

		   			},

		   		}

			},

			richtext: {

				name: '富文本',

				max: 5,

				icon: '#iconfuwenben',

				params: {

					content: ''

				},

				style: {

					'background': '#ffffff',

					'padding': '10',

					'margintop':'10'

				}

			},

			title: {

				name: '标题栏',

				icon: '#iconbiaotilan',

				params: {

					title: '',

					icon: '',

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:''

				},

				style: {

					background: '#ffffff',

					color: '#838383',

					textalign: 'left',

					fontsize: '14',

					paddingtop: '10',

					paddingleft: '10',

					sizew:'20',

					sizeh:'20',

					mt:'10'



				}

			},

			line: {

				name: '辅助线',

				icon: '#iconfuzhuxian',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style: {

					height: '2',

					background: '#ffffff',

					border: "#000000",

					padding: '0',

					pd:'0',

					linestyle: 'solid',

					mt:'10',

					sizew:'20',

					sizeh:'20'

				}

			},

			blank: {

				name: '辅助空白',

				icon: '#iconfuzhukongbai',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style: {

					height: '42',

					background: '#ffffff',

					mt:'10',

					sizew:'20',

					sizeh:'20'

				}

			},

			menu: {

				name: '按钮组',

				icon: '#iconanniuzu',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					picicon:'1',
					
					textshow:'1'

				},

				style: {

					navstyle: 'circle',

					background: '#ffffff',

					rownum: '4',

					showtype: '0',

					pagenum: '8',

					showdot: '1',

					padding:'0',

					paddingleft:'10',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					iconfz:'14',

					iconcolor:'#434343',

					imgwidth:'50'

				},

				data: {

					C0123456789101: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-1.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'


					},

					C0123456789102: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-2.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					},

					C0123456789103: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-3.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					},

					C0123456789104: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-4.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					},

					C0123456789105: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-4.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					},

					C0123456789106: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-3.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					},

					C0123456789107: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-2.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					},

					C0123456789108: {

						imgurl: ASSETS+'resource/images/diypage/default/icon-1.png',

						linkurl: '',

						text: '按钮文字',

						color: '#666666',

						icon:'icon-x-shouye2',

						iconclass:'icon-x-shouye2'

					}

				}

			},

			multiple: {

				name: '多商户模块',

				icon: '#iconduoshanghumokuai',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					picicon:'1',

					counts:'4',

					content_type:'1',

				},

				style: {

					navstyle: '',

					background: '#ffffff',

					rownum: '4',

					showtype: '0',

					pagenum: '8',

					showdot: '1',

					padding:'0',

					paddingleft:'10',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					iconfz:'14',

					iconcolor:'#434343',

					imgwidth:'50'

				},

				data: {

					C0123456789101: {

						imgurl: ASSETS+'resource/images/diypage/default/store-1.png',

						linkurl: '',

						text: '多商户',

						color: '#434343',

						icon:'icon-x-shouye2'

					},

					C0123456789102: {

						imgurl: ASSETS+'resource/images/diypage/default/store-2.png',

						linkurl: '',

						text: '多商户',

						color: '#434343',

						icon:'icon-x-shouye2'

					},

					C0123456789103: {

						imgurl: ASSETS+'resource/images/diypage/default/store-3.png',

						linkurl: '',

						text: '多商户',

						color: '#434343',

						icon:'icon-x-shouye2'

					},

					C0123456789104: {

						imgurl: ASSETS+'resource/images/diypage/default/store-4.png',

						linkurl: '',

						text: '多商户',

						color: '#434343',

						icon:'icon-x-shouye2'

					}

				}

			},
			mlist:{

				name:'多商户列表',

				icon:'#iconduoshanghuliebiao',

				params:{

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					content_type:'1'

				},

				style:{

					paddingtop: '10',

					paddingleft: '10',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					background:'#ffffff',
					
					viewcount:'4'



				},

			},
			menu2: {

				name: '文字按钮',

				icon: '#iconwenzianniu',

				params:{

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style: {

					margintop: '10',

					background: '#ffffff',

					sizew:'20',

					paddingleft:'10',

					padding:'5',

					sizeh:'20'

				},

				data: {
					C0123456789101: {

						text: '我的积分',

						iconclass: '',

						textcolor: '#434343',

						iconcolor: '#c0c0c0',

						linkurl: ''

					},

					C0123456789102: {

						text: '我的积分',

						iconclass: '',

						textcolor: '#434343',

						iconcolor: '#c0c0c0',

						linkurl: ''

					},

					C0123456789103: {

						text: '我的积分',

						iconclass: '',

						textcolor: '#434343',

						iconcolor: '#c0c0c0',

						linkurl: ''

					}

				}

			},

	

			picture: {

				name: '组图模块',

				icon: '#iconzutumokuai',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:''

				},

				style: {

					paddingtop: '10',

					paddingleft: '10',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					background:'#ffffff'

				},

				data: {

					C0123456789101: {

						imgurl: ASSETS+'resource/images/diypage/default/bigimgshow.jpg',

						linkurl: '',

					},

				}

			},

			picturew: {

				name: '图片橱窗',

				icon: '#icontupianchuchuang',

				params: {

					row: '1',

					showtype: 0,

					pagenum: '2',

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style: {

					paddingtop: '10',

					paddingleft: '10',

					showdot: 0,

					showbtn: 0,

					sizew:'20',

					sizeh:'20',

					mt:'10',

					background:'#ffffff'

				},

				data: {

					C0123456789101: {

						imgurl: ASSETS+'resource/images/diypage/default/picw_1.png',

						linkurl: '',

					},

					C0123456789102: {

						imgurl: ASSETS+'resource/images/diypage/default/picw_4.png',

						linkurl: '',

					},

					C0123456789103: {

						imgurl: ASSETS+'resource/images/diypage/default/picw_2.png',

						linkurl: '',

					},

					// C0123456789104: {

					// 	imgurl: ASSETS+'resource/images/diypage/default/picw_3.png',

					// 	linkurl: '',

					// }

				}

			},

			goods: {

				name: '产品模块',

				icon: '#iconchanpinmokuai',

				params: {

					goodsscroll: '0',

					showtitle: '1',

					showprice: '1',

					showtag: '0',

					goodsdata: '1',

					cateid: '',

					catename: '',

					groupid: '',

					groupname: '',

					goodssort: '0',

					goodsnum: '6',

					showicon: '1',

					iconposition: 'left top',

					productprice: '1',

					showproductprice: '0',

					showsales: '1',

					productpricetext: '原价',

					salestext: '销量',

					productpriceline: '0',

					saleout: '0',

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					imgh_is:'1',

					imgh:'100',

					con_key:'1',

					con_type:'1',

				},

				style: {

					background: '#f3f3f3',

					liststyle: 'block',

					buystyle: '',

					goodsicon: 'recommand',

					iconstyle: 'triangle',

					pricecolor: '#ff6f6e',

					productpricecolor: '#666666',

					iconpaddingtop: '0',

					iconpaddingleft: '0',

					buybtncolor: '#ff5555',

					iconzoom: '50',

					titlecolor: '#434343',

					tagbackground: '#fe5455',

					productpricecolor: '#999999',

					salescolor: '#939393',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					paddingtop:'10',

					paddingleft:'10',

					showtype:'0'

				},

				data: {

					C0123456789101: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						title: '这里是产品标题',

						sales: '5',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 1,

						desc:'这里是产品描述'

					},

					C0123456789102: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						title: '这里是产品标题',

						sales: '5',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 1,

						desc:'这里是产品描述'

					},

					C0123456789103: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						sales: '5',

						title: '这里是产品标题',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 0,

						desc:'这里是产品描述'

					},

					C0123456789104: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						sales: '5',

						title: '这里是产品标题',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 0,

						desc:'这里是产品描述'

					}

				}

			},
			reserve: {

				name: '预约预定',

				icon: '#iconchanpinmokuai',

				params: {

					goodsscroll: '0',

					showtitle: '1',

					showprice: '1',

					showtag: '0',

					goodsdata: '1',

					cateid: '',

					catename: '',

					groupid: '',

					groupname: '',

					goodssort: '0',

					goodsnum: '6',

					showicon: '1',

					iconposition: 'left top',

					productprice: '1',

					showproductprice: '0',

					showsales: '1',

					productpricetext: '原价',

					salestext: '销量',

					productpriceline: '0',

					saleout: '0',

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					imgh_is:'1',

					imgh:'100',

					con_key:'1',

					con_type:'1',

				},

				style: {

					background: '#f3f3f3',

					liststyle: 'block',

					buystyle: '',

					goodsicon: 'recommand',

					iconstyle: 'triangle',

					pricecolor: '#ff5555',

					productpricecolor: '#666666',

					iconpaddingtop: '0',

					iconpaddingleft: '0',

					buybtncolor: '#ff5555',

					iconzoom: '50',

					titlecolor: '#000000',

					tagbackground: '#fe5455',

					productpricecolor: '#999999',

					salescolor: '#939393',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					paddingtop:'10',

					paddingleft:'10',

					showtype:'0'

				},

				data: {

					C0123456789101: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						title: '这里是产品标题',

						sales: '5',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 1,

						desc:'这里是产品描述'

					},

					C0123456789102: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						title: '这里是产品标题',

						sales: '5',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 1,

						desc:'这里是产品描述'

					},

					C0123456789103: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						sales: '5',

						title: '这里是产品标题',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 0,

						desc:'这里是产品描述'

					},

					C0123456789104: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						sales: '5',

						title: '这里是产品标题',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 0,

						desc:'这里是产品描述'

					}

				}

			},

			yhqgoods: {

				name: '优惠券商品',

				icon: 'iconfont2 icon-youhuiquan',

				params: {

					goodsscroll: '0',

					showtitle: '1',

					showprice: '1',

					showtag: '0',

					goodsdata: '3',

					cateid: '',

					catename: '',

					groupid: '',

					groupname: '',

					goodssort: '0',

					goodsnum: '6',

					showicon: '1',

					iconposition: 'left top',

					productprice: '1',

					showproductprice: '0',

					showsales: '1',

					productpricetext: '原价',

					salestext: '销量',

					productpriceline: '0',

					saleout: '0',

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					imgh_is:'1',

					imgh:'100',

					con_key:'1',

					con_type:'1',

				},

				style: {

					background: '#f3f3f3',

					liststyle: 'block',

					buystyle: '',

					goodsicon: 'recommand',

					iconstyle: 'triangle',

					pricecolor: '#ff5555',

					productpricecolor: '#666666',

					iconpaddingtop: '0',

					iconpaddingleft: '0',

					buybtncolor: '#ff5555',

					iconzoom: '50',

					titlecolor: '#000000',

					tagbackground: '#fe5455',

					productpricecolor: '#999999',

					salescolor: '#939393',

					mt:'10',

					sizew:'20',

					sizeh:'20',

					paddingtop:'10',

					paddingleft:'10',

					showtype:'0'

				},

				data: {

					C0123456789101: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						title: '这里是商品标题',

						sales: '5',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 1,

						desc:'这里是商品描述'

					},

					C0123456789102: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						title: '这里是商品标题',

						sales: '5',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 1,

						desc:'这里是产品描述'

					},

					C0123456789103: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						sales: '5',

						title: '这里是商品标题',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 0,

						desc:'这里是商品描述'

					},

					C0123456789104: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						price: '20.00',

						productprice: '99.00',

						sales: '5',

						title: '这里是商品标题',

						gid: '',

						bargain: 0,

						credit: 0,

						ctype: 0,

						desc:'这里是商品描述'

					}

				}

			},


			diymod: {

				name: '公用模块',

				params: {

					'modid': '',

					'modname': ''

				},

				style: {}

			},
			// dp:{
			// 	name: '预留模块',

			// 	icon: 'iconfont2 icon-daohang1',

			// 	params:{
            //         backgroundimg:'',
			// 		src:'',
			// 	},
			// },
			listmenu: {

				name: '列表导航',

				icon: '#iconliebiaodaohang',

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style: {

					margintop: '10',

					background: '#ffffff',

					iconcolor: '#bfbfbf',

					textcolor: '#434343',

					remarkcolor: '#bfbfbf',

					sizew:'20',

					paddingleft:'10',

					padding:'10',

					sizeh:'20',
					linecolor:'#eeeeee'

				},

				data: {

					C0123456789101: {

						text: '导航',

						linkurl: '',

						iconclass: 'icon-x-pingjia2',

						remark: '更多',

						dotnum: ''

					},

					C0123456789102: {

						text: '导航',

						linkurl: '',

						iconclass: 'icon-x-pingjia2',

						remark: '更多',

						dotnum: ''

					},

					C0123456789103: {

						text: '导航',

						linkurl: '',

						iconclass: 'icon-x-pingjia2',

						remark: '更多',

						dotnum: ''

					}

				}

			},

			audio: {

				name: "音频播放",

				params: {

					title: "未定义音频信息",

					subtitle: "副标题",

					playerstyle: 0,

					autoplay: 0,

					loopplay: 0,

					pausestop: 0,

					headalign: "left",

					headtype: "",

					headurl: ""

				},

				style: {

					background: "#f1f1f1",

					bordercolor: "#ededed",

					textcolor: "#333333",

					subtitlecolor: "#666666",

					timecolor: "#666666",

					paddingtop: "10",

					paddingleft: "10",

					width: "80"

				}

			},

			tabbar: {

				name: '选项卡',

				icon: '#iconxuanxiangka',

				max: 2,

				params:{

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style: {

					background: '#ffffff',

					color: '#939393',

					activebackground: '#ffffff',

					activecolor: '#ff6f6e',

					activeborder:'#ff6f6e',

					padding:'0',

					paddingleft:'10',

					mt:'10',

					scrollnum: 3,

					sizew:'20',

					sizeh:'20'

				},

				data: {

					C0123456789101: {

						text: '选项卡文字',

						linkurl: ''

					},

					C0123456789102: {

						text: '选项卡文字',

						linkurl: ''

					},

					C0123456789103: {

						text: '选项卡文字',

						linkurl: ''

					}

				}

			},

			cases: {

				name: '图文组',

				icon: '#icontuwenzu',

				params: {

					hidetext: 0,

					showtype: 0,

					rownum: 3,

					showbtn: 0,

					casedata: 0,

					casenum: 3,

					show:1,

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					con_key:'1',

    					con_type:'1'

				},

				style: {

					navstyle: '',

					background: "#ffffff",

					paddingtop: "10",

					paddingleft: "10",

					titlealign: 'left',

					titlecolor: '#ffffff',

					titlebg1:'rgba(0,0,0,0.6)',

					titlebg2:'rgba(0,0,0,0)',

					mt:'10',

					pdh:'2',

					pdw:'4',

					sizew:'20',

					sizeh:'20',

					pich:'1'

				},

				data: {

					C0123456789101: {

						imgurl: ASSETS+'resource/images/diypage/default/bigimgshow.jpg',

						id: '',

						title: '这里是标题'

					},

					C0123456789102: {

						imgurl: ASSETS+'resource/images/diypage/default/bigimgshow.jpg',

						id: '',

						title: '这里是标题'

					},

					C0123456789103: {

						imgurl: ASSETS+'resource/images/diypage/default/bigimgshow.jpg',

						id: '',

						title: '这里是标题'

					}

				}

			},

			// joblist: {

			// 	name: '招聘模块',

			// 	icon: '#iconzhaopinmokuai',

			// 	params:{

			// 		styledata:'0',

			// 		repeat:'repeat',

			// 		positionx:'left',

			// 		positiony:'top',

			// 		size:'0',

			// 		backgroundimg:'',

			// 	},

			// 	style: {

			// 		background: "#ffffff",

			// 		paddingtop: "10",

			// 		paddingleft: "10",

			// 		typecolor: '#ff4a47',

			// 		mt:'10',

			// 		sizew:'20',

			// 		sizeh:'20'

			// 	},

			// 	data: {

			// 		C0123456789101: {

			// 			jobname: '招聘职位',

			// 			gz: '面议',

			// 			address: '北京',

			// 			gzjy:'3-5年',

			// 			xl:'本科',

			// 			timestop: '2018-02-20',

			// 		},

			// 		C0123456789102: {

			// 			jobname: '招聘职位',

			// 			gz: '面议',

			// 			address: '北京',

			// 			gzjy:'3-5年',

			// 			xl:'本科',

			// 			timestop: '2018-02-20',

			// 		}

			// 	}

			// },



			xfk: {

				name:'悬浮框',

				icon: '#iconxuanfukuang',

				max: 1,

				params: {

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

				},

				style:{

					background:'#7ad4d2',

					padding:"10",

					top:'120',

					right:'10',

					iconmargin:'10',

					iconfont:'20',

					sizew:'20',

					sizeh:'20',

					navstyle:'radius',

					iconcolor:"#ffffff"

				},

				data: {

					C0123456789101: {

						iconclass: 'icon-x-shouye2',

						linkurl: '',

						linktype:'',

						bgcolor:'#666666'

					}

				}

			},

        ddlb: {

            name:'订单轮播',

            icon: '#icondingdanlunbo',

            max: 1,

            params: {

                styledata:'0',

                repeat:'repeat',

                positionx:'left',

                positiony:'top',

                size:'0',

                backgroundimg:'',
            },

            style:{

                background:'#7f7f7f',

                color:"#ffffff",

                top:'120',

                right:'10',

				padding:'10',

				speed:'1',

                borderradius:'20'
            },
			data:{
                C0123456789101: {
                    background:'#7f7f7f',

                    color:"#ffffff",

                    top:'120',

                    right:'10',

                    padding:'10',

                    speed:'1',

                    borderradius:'10'
                },
			}
        },



			listdesc: {

				name: '文章列表',

				icon: '#iconwenzhangliebiao',

				params: {

					showstyle: 'row1',

					newsnum: 3,

					newsdata: 0,

					title:"请选择文章分类",

					titleid:"0",

					navstyle:1,

					show1:1,

					show2:1,

					show3:1,

					show4:1,

					styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

					con_key:'1',

    					con_type:'1'

				},

				style: {

					background: "#ffffff",

					paddingtop: "10",

					paddingleft:'10',

					marginbottom: "10",

					mt:'10',

					sizew:'20',

					sizeh:'20',

					color:'#434343',

					radius:'0',

					pich:'1',

					showtype:'0'

				},

				data: {

					C0123456789101: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						id: '',

						title: '这里是标题',

						time: '2017年10月1日',

						intro:'这里是简介',

						ydl:'10',

						dzl:'10',

						pll:'10'

					},

					C0123456789102: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						id: '',

						title: '这里是标题',

						time: '2017年10月1日',

						intro:"这里是简介",

						ydl:'10',

						dzl:'10',

						pll:'10'

					},

					C0123456789103: {

						thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

						id: '',

						title: '这里是标题',

						time: '2017年10月1日',

						intro:"这里是简介",

						ydl:10,

						dzl:10,

						pll:10

					}

				}

			},
			// supply: {

			// 	name: '供求关系',

			// 	icon: '#icongongqiuguanxi',

			// 	params: {

			// 		showstyle: 'row1',

			// 		newsnum: 3,

			// 		newsdata: 0,

			// 		title:"请选择文章分类",

			// 		titleid:"0",

			// 		navstyle:1,

			// 		show1:1,

			// 		show2:1,

			// 		show3:1,

			// 		show4:1,

			// 		data_types:1,

			// 		supply: 1,

			// 		styledata:'0',

			// 		repeat:'repeat',

			// 		positionx:'left',

			// 		positiony:'top',

			// 		size:'0',

			// 		backgroundimg:'',

			// 		con_key:'1',

    		// 			con_type:'1'

			// 	},

			// 	style: {

			// 		background: "#ffffff",

			// 		paddingtop: "10",

			// 		paddingleft:'10',

			// 		marginbottom: "10",

			// 		mt:'10',

			// 		sizew:'20',

			// 		sizeh:'20',

			// 		color:'#434343',

			// 		radius:'0',

			// 		pich:'1',

			// 		showtype:'0'

			// 	},

			// 	data: {

			// 		C0123456789101: {

			// 			thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

			// 			id: '1',

			// 			title: '这里是标题',

			// 			time: '2017年10月1日',

			// 			intro:'这里是简介',

			// 			ydl:'10',

			// 			dzl:'10',

			// 			pll:'10'

			// 		},

			// 		C0123456789102: {

			// 			thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

			// 			id: '2',

			// 			title: '这里是标题',

			// 			time: '2017年10月1日',

			// 			intro:"这里是简介",

			// 			ydl:'10',

			// 			dzl:'10',

			// 			pll:'10'

			// 		},

			// 		C0123456789103: {

			// 			thumb: ASSETS+'resource/images/diypage/default/no_proimg.png',

			// 			id: '3',

			// 			title: '这里是标题',

			// 			time: '2017年10月1日',

			// 			intro:"这里是简介",

			// 			ydl:10,

			// 			dzl:10,

			// 			pll:10

			// 		}

			// 	}

			// },

			// contact: {

			// 	name: '企业信息',

			// 	icon: '#iconqiyexinxi',

			// 	params: {

			// 		src:ASSETS+'resource/images/diypage/default/qyxx.png',

			// 		hidetext: 0,

			// 		showtype: 0,

			// 		rownum: 3,

			// 		showbtn: 0,

			// 		casedata: 0,

			// 		casenum: 3,

			// 		logo:'',

			// 		title:'公司/企业名称',

			// 		label:'企业标签',

			// 		tel:'0513-8888-8888',

			// 		qq:'1234567891',

			// 		address:'北京市东城区188号',

			// 		intro:'企业简介',

			// 		styledata:'1',

			// 		repeat:'repeat',

			// 		positionx:'left',

			// 		positiony:'top',

			// 		size:'1',

			// 		backgroundimg:ASSETS+'resource/images/diypage/default/com_bg.png',

			// 		ewm:'',

			// 	},

			// 	style: {

			// 		background: "#ffffff",

			// 		backgroundtop: "#7ad4d2",

			// 		paddingtop: "10",

			// 		paddingleft: "10",

			// 		color:'#434343',

			// 		mt:'10',

			// 		sizew:'20',

			// 		sizeh:'20'

			// 	}

			// },

			// feedback: {

			// 	name: '万能表单',

			// 	max: 1,

			// 	icon: '#iconwannengbiaodan',

			// 	params: {

			// 		navstyle:1,

			// 		styledata: 0,

			// 		backgroundimg: "",

			// 		btntext: '提交',

			// 		tslx:0,

			// 		repeat:'repeat',

			// 		positionx:'left',

			// 		positiony:'top',

			// 		size:'0'
			// 	},

			// 	style: {

			// 		background: "#ffffff",

			// 		paddingtop: "10",

			// 		paddingleft: "10",

			// 		inputbgcolor: '#ffffff',

			// 		inputcolor: '#434343',

			// 		inputmt:'10',

			// 		borderradius:'3',

			// 		bordercolor:'#eeeeee',

			// 		btnborderradius: '3',

			// 		btncolor: '#ffffff',

			// 		btnbgcolor: '#7ad4d2',

			// 		btnpaddingtop: "10",

			// 		btnmargintop: "10",

			// 		btnmarginright: "10",

			// 		mt:'10',

			// 		sizew:'20',

			// 		sizeh:'20'

			// 	}

			// },

			// copyright: {

		 //       name:'版权设置',

		 //       icon:'iconfont icon-c-shangjia',

		 //       max: 1,

		 //       params: {

		 //        iconsrc:ASSETS+'resource/images/diypage/default/copyright.png',

		 //        copyright_is:'1',

		 //        copyright_type:'1',

		 //        link:'',

		 //        linktype:'',

		 //        text:'版权文本'

		 //       },

		 //       style: {

		 //        mt:'10',

		 //        paddingtop:'5',

		 //        imgw:'50',

		 //        text_color:"#595961",

		 //        text_font:"12"

		 //       }

		 //  	},

			// footmenu: {

			// 	name: '自定义菜单',

			// 	icon: 'iconfont2 icon-caidan',

			// 	isfoot: 1,

            //     max: 1,

            //     params: {

            //     	navstyle: '1',

            //     	textshow:'1',

            //     	styledata:'0',

			// 		repeat:'repeat',

			// 		positionx:'left',

			// 		positiony:'top',

			// 		size:'0',

			// 		backgroundimg:'',

            //     },

            //     style: {

            //         pagebgcolor: '#f9f9f9',

            //         bgcolor: '#ffffff',

            //         bgcoloron: '#ffffff',

            //         iconcolor: '#999999',

            //         iconcoloron: '#999999',

            //         textcolor: '#666666',

            //         textcoloron: '#666666',

            //         bordercolor: '#cccccc',

            //         bordercoloron: '#ffffff',

            //         childtextcolor: '#666666',

            //         childbgcolor: '#f4f4f4',

            //         childbordercolor: '#eeeeee',

            //         sizew:'20',

			// 		sizeh:'20',

			// 		paddingleft:'0',

			// 		paddingtop:'0',

			// 		iconfont:'28',

			// 		textfont:'12',

			// 		bdr:'0',

			// 		bdrcolor:'#cccccc'

            //     },

            //     data: {

            //         M0123456789101: {

            //             imgurl: ASSETS+'resource/images/diypage/default/icon-1.png',

            //             linkurl: '',

            //             iconclass: 'icon-x-shouye2',

            //             text: '首页'

            //         },

            //         M0123456789102: {

            //             imgurl: ASSETS+'resource/images/diypage/default/icon-2.png',

            //             linkurl: '',

            //             iconclass: 'icon-x-chanpin2',

            //             text: '产品'

            //         },

            //         M0123456789103: {

            //             imgurl: ASSETS+'resource/images/diypage/default/icon-3.png',

            //             linkurl: '',

            //             iconclass: 'icon-x-liebiao',

            //             text: '案例'

            //         },

            //         M0123456789105: {

            //             imgurl: ASSETS+'resource/images/diypage/default/icon-4.png',

            //             linkurl: '',

            //             iconclass: 'icon-x-dianhua10',

            //             text: '联系我们'
 
            //         }

            //     }

			// },

		// 	video: {

        //         name: '单个视频',

        //         icon: '#icondangeshipin',

        //         style: {

        //             ratio: '0',

        //             background:'#ffffff',

        //             mt:'10',

        //             paddingleft:'10',

        //             paddingtop:'10'

        //         },

        //         params: {

        //             videourl: '',

        //             poster: ASSETS+'resource/images/diypage/default/videoplay.png',

        //             videostyle:'0',
		// 								styledata:'0',
		// 								repeat:'repeat',

		// 								positionx:'left',
					
		// 								positiony:'top',
					
		// 								size:'0',
        //             backgroundimg:'',

		// 								autoplay:'0',

        //         }

        //    },

        //    dt:{

        //    		name:'地图模块',

        //    		icon:'#iconditumokuai',

        //    		params:{

        //    			hzb:'',

        //    			zzb:'',

        //    			wzmc:'',

        //    			xxdz:'',

        //    			styledata:'0',

		// 			repeat:'repeat',

		// 			positionx:'left',

		// 			positiony:'top',

		// 			size:'0',

		// 			backgroundimg:'',

        //    		},

        //    		style: {

        //    			height:'200',

        //    			padding1:'10',

        //    			padding2:'10',

        //    			background:'#ffffff',

        //    			mt:'10',

        //    			sizew:'20',

		// 			sizeh:'20'

        //    		}

        //    },

           nav: {

           		name: '按钮组',

				icon: 'iconfont2 icon-list',

				params: {



				},

				style: {

					navstyle: '',

					background: '#ffffff',

					rownum: '4',

					showtype: '0',

					pagenum: '8',

					showdot: '1',

				},

				data: {

					C0123456789101: {

						imgurl: ASSETS+'resource/images/diypage/default/xfk.png',

						linkurl: '',

						text: '导航名称',

						color: '#666666'

					},

					C0123456789102: {

						imgurl: ASSETS+'resource/images/diypage/default/xfk.png',

						linkurl: '',

						text: '导航名称',

						color: '#666666'

					},

					C0123456789103: {

						imgurl: ASSETS+'resource/images/diypage/default/xfk.png',

						linkurl: '',

						text: '导航名称',

						color: '#666666'

					},

					C0123456789104: {

						imgurl: ASSETS+'resource/images/diypage/default/xfk.png',

						linkurl: '',

						text: '导航名称',

						color: '#666666'

					}

				}

           },

           ssk: {

           		name:'搜索栏',

           		icon:'#iconsousuolan',

           		params:{

           			value:'',

           			styledata:'0',

					repeat:'repeat',

					positionx:'left',

					positiony:'top',

					size:'0',

					backgroundimg:'',

           		},

           		style:{

           			textalign:'left',

           			background:'#ffffff',

           			bg:'#ffffff',

           			borderradius:'5',

           			boxpdh:'10',

           			boxpdz:'15',

           			padding:'5',

           			fontsize:'13',

           			mt:'0',

           			sizew:'20',

					sizeh:'20',

					color:'#cccccc'

           		}

           },



     // 		logo:{

     // 			name: '头部LOGO',

     //       		icon:'iconfont2 icon-L',

     //       		params:{

     //       			src:ASSETS+'resource/images/diypage/default/logo.jpg',

     //       			dh:'123456789',

     //       			styledata:'0',

					// repeat:'repeat',

					// positionx:'left',

					// positiony:'top',

					// size:'0',

					// backgroundimg:'',

     //       		},

     //       		style:{

     //       			mt:'15',

     //       			sizew:'20',

     //       			sizeh:'20',

     //       			paddingleft:'10',

     //       			paddingtop:'10',

     //       			width:'95',

     //       			pwidth:'15',

     //       			bg:'#ffffff',

     //       			fs:'14',

     //       			color:'#000'

     //       		}

     // 		},



		   anniu:{

		  			name:'单个按钮',

		  			icon:'#icondangeanniu',

		  			params:{

		  				icon:'icon-home',

		  				title:'查看更多',

		  				styledata:'0',

		  				repeat:'repeat',

		  				positionx:'left',

		  				positiony:'top',

		  				size:'0',

		  				backgroundimg:'',

		  			},

		  			style:{

		  				paddingleft:'10',

		  				paddingtop:'10',

		  				pdz:'10',

		  				mt:'10'	,

		  				sizew:'20',

		  				sizeh:'20',

		  				fs:'14',

		  				background:'#ffffff',

		  				bordercolor:'#7ad4d2',

		  				btnbg:'#7ad4d2',

		  				color:'#ffffff',

		  				borderradius:'5'

		  			}

		   },

		//    xnlf: {

		//    		name:'虚拟来访',

		//    		icon:'#iconxunilaifang',

		//    		params:{

		//    			fwl:'1000',

		//    			dzs:'300',

		//    			fxs:'400',

		//    			styledata:'0',

		// 			repeat:'repeat',

		// 			positionx:'left',

		// 			positiony:'top',

		// 			size:'0',

		// 			backgroundimg:'',

		// 			iconfwl:'icon-x-jilu',

		// 			iconfxs:"icon-x-fenxiang3",

		// 			icondzs:"icon-x-zan1"

		//    		},

		//    		style:{

		//    			pdz:'10',

		//    			pdh:'10',

		//    			bg:'#ffffff',

		//    			bgn:'#434343',

		//    			mt:'10',

		//    			sizew:'20',

		// 			sizeh:'20'

		//    		}

		//    },

		   // dp: {

		   // 		name:'店铺门头',

		   // 		icon:'iconfont2 icon-dianpu',

		   // 		params:{

		   // 			src:ASSETS+'resource/images/diypage/default/dpmt.jpg',

		   // 			title:'门店名称',

		   // 			linkurl:'',

		   // 			styledata:'0',

					// repeat:'repeat',

					// positionx:'left',

					// positiony:'top',

					// size:'0',

					// backgroundimg:'',

					// urltitle:'进入店铺'

		   // 		},

		   // 		style: {

		   // 			pdh:'10',

		   // 			pdz:'10',

		   // 			bg:'#ffffff',

		   // 			bgn:'#ffffff',

		   // 			imgwidth:'45',

		   // 			ljcolor:'#727272',

		   // 			ljfz:'12',

		   // 			dpcolor:'',

		   // 			dpfz:'14',

		   // 			mt:'10',

		   // 			sizew:'20',

					// sizeh:'20'

		   // 		}

		   // },

		//    yhq: {

		//    		name:'优惠券',

		//    		icon:'#iconyouhuiquan',

		//    		params: {

		// 			hidetext: 0,

		// 			showtype: 0,

		// 			rownum: 3,

		// 			showbtn: 0,

		// 			styledata:'0',

		// 			repeat:'repeat',

		// 			positionx:'left',

		// 			positiony:'top',

		// 			size:'0',

		// 			backgroundimg:'',

		// 		},

		// 		style: {

		// 			background: "#ffffff",

		// 			yhqbg:'#f092a7',

		// 			yhqbg2:'#f092a7',

		// 			paddingtop: "10",

		// 			paddingleft: "10",

		// 			color: '#ffffff',

		// 			mt:'10',

		// 			sizew:'20',

		// 			sizeh:'20',

		// 			counts:'3'

		// 		},

		// 		data: {

		// 			C0123456789101: {

		// 				linkurl: '',

		// 				title: '100',

		// 				text: '满500元可用'

		// 			},

		// 			C0123456789102: {

		// 				linkurl: '',

		// 				title: '100',

		// 				text: '满500元可用'

		// 			},

		// 			C0123456789103: {

		// 				linkurl: '',

		// 				title: '100',

		// 				text: '满500元可用'

		// 			}

		// 		}

		//    },

		//    dnfw: {

		//    		name:'店内服务',

		// 		icon: '#icondianneifuwu',

		// 		params: {

		// 			hidetext: 0,

		// 			showtype: 0,

		// 			rownum: 3,

		// 			showbtn: 0,

		// 			styledata:'0',

		// 			repeat:'repeat',

		// 			positionx:'left',

		// 			positiony:'top',

		// 			size:'0',

		// 			backgroundimg:'',

		// 		},

		// 		style: {

		// 			background: "#ffffff",

		// 			paddingtop: "10",

		// 			paddingleft: "10",

		// 			iconfz:'16',

		// 			tbcolor:'#434343',

		// 			color:'#939393',

		// 			tbbg:'#ffffff',

		// 			pdl:'5',

		// 			mt:'10',

		// 			sizew:'20',

		// 			sizeh:'20',

		// 			fontsize:'12'

		// 		},

		// 		data: {

		// 			C0123456789101: {

		// 				iconclass: 'icon-c-tingche',

		// 				text: '停车场'

		// 			},

		// 			C0123456789102: {

		// 				iconclass: 'icon-c-wifi',

		// 				text: '无线局域网'

		// 			},

		// 			C0123456789103: {

		// 				iconclass: 'icon-c-chashui',

		// 				text: '茶水'

		// 			}

		// 		}

		//    },

		//    yuyin: {

		//        name:'语音播放',

		//        icon:'#iconyuyinbofang',

		//        params: {
		// 					backgroundimg:'',
		//         	src:ASSETS+'resource/images/diypage/default/audio.png',
		//         	linkurl:"",
		// 					navstyle:'1',
		// 					styledata:'0',
		// 					repeat:'repeat',
		// 					positionx:'left',
		// 					positiony:'top',
		// 					size:'0',
		// 					icon:'icon-x-yuyin3',
		//        },

		//        style: {

		//         pdh:'15',

		//         pdz:'10',

		//         mt:'10',

		//         background:'#ffffff',

		//         sizew:'20',

		// 		sizeh:'20',

		// 		iconcolor:'#7ad4d2',

		// 		iconfont:"22",

		// 		yybg:"#7ad4d2",

		// 		yyborder:"#7ad4d2"

		//        }

		//   	},



		//    pt: {

		//    		name:'拼团模块',

		//    		icon: '#iconpintuanmokuai',

		//    		params:{

		//    			navstyle:'1',

		//    			styledata:'0',

		// 			repeat:'repeat',

		// 			positionx:'left',

		// 			positiony:'top',

		// 			size:'0',

		// 			backgroundimg:'',

		// 			goodsnum:'2',

		// 			con_key:'1',

    	// 				con_type:'1'

		//    		},

		//    		style:{

		//    			background:'#ffffff',

		//    			pdw:'10',

		//    			pdh:'10',

		//    			mb:'10',

		//    			mt:'1',

		//    			sizew:'20',

		// 			sizeh:'20',

		// 			pich:'1'

		//    		},

		//    		data: {

		//    			C0123456789101:{

		//    				imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',

		//    				title:'拼团商品标题',

		//    				description:'拼团商品简介',

		//    				count:'927',

		//    				price:'21',

		//    				person:'2',

		//    				tz:'92',

		//    				tgr:'427',

		//    				tgj:'17.20',

		//    				linkurl:'',

		//    				linktype:''

		//    			},

		//    			C0123456789102:{

		//    				imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',

		//    				title:'拼团商品标题',

		//    				description:'拼团商品简介',

		//    				count:'927',

		//    				price:'21',

		//    				person:'2',

		//    				tz:'92',

		//    				tgr:'427',

		//    				tgj:'17.2',

		//    				linkurl:'',

		//    				linktype:''

		//    			},

		//    			C0123456789103:{

		//    				imgurl:ASSETS+'resource/images/diypage/default/no_proimg.png',

		//    				title:'拼团商品标题',

		//    				description:'拼团商品简介',

		//    				count:'927',

		//    				price:'21',

		//    				person:'2',

		//    				tz:'92',

		//    				tgr:'427',

		//    				tgj:'17.2',

		//    				linkurl:'',

		//    				linktype:''

		//    			},

		//    		}

		//    	},

		   	// wyrq:{

		    //    name:'网页容器',

		    //    icon:'#iconwangyerongqi',

		    //    max : 1,

		    //    params:{

		    //     linkurl:''

		    //    }

		    // }

		

		
}