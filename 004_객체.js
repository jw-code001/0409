// const 버튼 = {
//     클릭주소 : "http://www.naver.com",
//     텍스트 : "네이버",
//     하위메뉴 : ["스토어팜","플레이스"]
// }

// console.log(버튼)
// console.log(버튼["텍스트"]) // --> 버튼 안에있는 텍스트의 내용
// console.log(버튼["하위메뉴"][0])
// console.log(버튼.하위메뉴[0])


// /////////////////////////////////////////////////////////////////////

// const menu = {
//     회사소개: {
//         link: "/about",
//         subMenu: [
//             { name: "브랜드소개", link: "/about/brand" },
//             { name: "오시는 길", link: "/about/location" }
//         ]
//     },
//     견적문의: {
//         link: "/inquiry",
//         subMenu: [] // 하위 메뉴가 없는 경우 빈 배열
//     },
//     제품안내: {
//         link: "/products",
//         subMenu: [
//             { name: "신상품", link: "/products/new" },
//             { name: "제휴상품", link: "/products/partner" },
//             { name: "후기상품", link: "/products/review" }
//         ]
//     }
// };

// // 데이터 확인용 출력
// console.log("--- 전체 메뉴 구조 ---");
// console.log(menu);

// console.log("\n--- 특정 데이터 접근 예시 ---");
// console.log("1. 회사소개 링크:", menu.회사소개.link); 
// console.log("2. 브랜드소개 텍스트:", menu.회사소개.subMenu[0].name);
// console.log("3. 신상품 링크:", menu.제품안내.subMenu[0].link);

// /////////////////////////////////////////////////////////////////////


const menu = {
    company: {
        title : "회사소개",
        subMenu : ["오시는길","문의하기"]
    },

    estimate: {
        title : "견적문의",
        subMenu : ["신상품","후기상품"]
    },

    products: {
        title : "제품안내",
        subMenu : ["신상품","제휴상품","그외"]
    }
};

menu.company.subMenu[1] = "브랜드소개"; 
// menu["company"].subMenu[1] = "브랜드소개";
console.log(menu.products["subMenu"][1])

