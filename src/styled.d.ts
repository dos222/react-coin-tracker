import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme { 
        bgColor : string; 
        textColor : string;
        accentColor : string; 
        liBgColor : string;
    }
}

// styled-components의 DefaultTheme 오버라이드 