function navigateTo(location){
    let url = "";
    switch(location){
        case "home":
            url = "/Web/user/dashboard/ucd/";
            break;
        case "accounts-balance":
            url = "/Web/account/balances/balances";
            break;
        case "accounts-holding":
            url = "/Web/account/holdings/default/";
            break;
        case "accounts-holdingZoom":
            url = "/Web/account/holdings/holdingZoom/";
            break;
        case "accounts-history":
            url = "/Web/account/history/default/";
            break;
        case "accounts-unrealizedGainLoss":
            url = "/Web/account/unrealizedGainLoss/default/";
            break;
        case "accounts-realizedGainLoss":
            url = "/Web/account/realizedGainLoss/default/";
            break;
        case "accounts-asset":
            url = "/Web/account/assetOverview/allocation";
            break;
        case "accounts-download":
            url = "/Modules/Accounts/Download/enter.php";
            break;
        case "trading-order":
            url = "/Web/account/orders/default/";
            break;
        case "research-findSymbol":
            url = "/Modules/Research/SymbolLookup/symbolLookup.php";
            break;
        case "research-optionChain":
            url = "/Modules/Research/OptionChain/optionChain.php";
            break;
        case "research-marketOverview":
            url = "/Web/morningstar/";
            break;
        case "research-advancedChart":
            url = "/Web/morningstar/chart/";
            break;
        case "research-marketsEventCalendar":
            url = "/Web/morningstar/earningsCalendar/";
            break;
        case "research-stockAlerts":
            url = "/Web/morningstar/alerts/";
            break;
        case "research-stockFundamentalsReport":
            url = "/Web/morningstar/stockReport/";
            break;
        case "research-mutualFund":
            url = "/Web/morningstar/fundReport/";
            break;
        case "research-screener":
            url = "/Web/morningstar/screener/";
            break;
        case "calculator-collegeCost":
            url = "/Modules/Lib/MVC/iframe.php?target=morningstar.collegeCostCalc";
            break;
        case "calculator-iraComparison":
            url = "/Modules/Lib/MVC/iframe.php?target=morningstar.iraCompCalc";
            break;
        case "calculator-iraEligibility":
            url = "/Modules/Lib/MVC/iframe.php?target=morningstar.iraEligCalc";
            break;
        case "calculator-iraRothConversion":
            url = "/Modules/Lib/MVC/iframe.php?target=morningstar.iraRothCalc";
            break;
        case "calculator-retirementCost":
            url = "/Modules/Lib/MVC/iframe.php?target=morningstar.retirementCalc";
            break;
        case "tools-messageCenter":
            url = "/Modules/Communication/MsgCenter/list.php";
            break;
        case "logout":
            url = "/Modules/Login/logoutExpand.php";
            break;
        default:
            url = "/Web/user/dashboard/ucd/";
            break;
    }
    alert('what is the url that we are navigating to ' + url);
}
