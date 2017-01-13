import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { Home }                     from './components/home/home.component';
import { Template }                 from './components/template/template.component';
import { News }                     from './components/news/news.component';
import { Apply }                    from './components/apply/apply.component';
import { Data }                     from './components/data/data.component';
import { DataGraph }                from './components/data/datagraph.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'Home', pathMatch: 'full'
    },
    {
        path: 'Home', component: Home, data: { routeName: "Home" }
    },
    {
        path: 'About', component: Template, data: { routeName: "About" }
    },
    {
        path: 'MealPrograms', component: Template, data: { routeName: "MealPrograms" }
    },
    {
        path: 'About/GeneralInformation', component: Template, data: { routeName: "GeneralInformation" }
    },
    {
        path: 'About/SupportingAcademics', component: Template, data: { routeName: "SupportingAcademics" }
    },
    {
        path: 'About/WhatWeDo', component: Template, data: { routeName: "WhatWeDo" }
    },
    {
        path: 'MealPrograms/SchoolMeals', component: Template, data: { routeName: "SchoolMeals" }
    },
    {
        path: 'MealPrograms/ChildAndAdultCare', component: Template, data: { routeName: "ChildAndAdultCare" }
    },
    {
        path: 'MealPrograms/SummerFoods', component: Template, data: { routeName: "SummerFoods" }
    },
    {
        path: 'MealPrograms/SpecialMilk', component: Template, data: { routeName: "SpecialMilk" }
    },
    {
        path: 'MealPrograms/USDA', component: Template, data: { routeName: "USDA" }
    },
    {
        path: 'MealPrograms/MMFA', component: Template, data: { routeName: "MMFA" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives', component: Template, data: { routeName: "SpecialInitiatives" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives/FarmToSchool', component: Template, data: { routeName: "FarmToSchool" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives/Wellness', component: Template, data: { routeName: "Wellness" }
    },
    {
        path: 'MealPrograms/SpecialInitiatives/Training', component: Template, data: { routeName: "Training" }
    },
    {
        path: 'Data', component: Data, data: { routeName: "Data" }
    },
    {
        path: 'Data/FedFunds', component: Template, data: { routeName: "FedFunds" }
    },
    {
        path: 'Data/SMFunding', component: Template, data: { routeName: "SMFunding" }
    },
    {
        path: 'Data/SMLunchServed', component: Template, data: { routeName: "SMLunchServed" }
    },
    {
        path: 'Data/SMBKServed', component: Template, data: { routeName: "SMBKServed" }
    },
    {
        path: 'Data/BKvLNTrend', component: Template, data: { routeName: "BKvLNTrend" }
    },
    {
        path: 'Data/BKPartFMElig', component: Template, data: { routeName: "BKPartFMElig" }
    },
    {
        path: 'Data/LNPartFMElig', component: Template, data: { routeName: "LNPartFMElig" }
    },
    {
        path: 'Data/TrendReimburse', component: Template, data: { routeName: "TrendReimburse" }
    },
    {
        path: 'Data/TrendFARMElig', component: Template, data: { routeName: "TrendFARMElig" }
    },
    {
        path: 'Data/MMFAPart', component: Template, data: { routeName: "MMFAPart" }
    },
    {
        path: 'Data/FFVPPart', component: Template, data: { routeName: "FFVPPart" }
    },
    {
        path: 'Apply', component: Apply, data: { routeName: "Data" }
    },
    {
        path: 'News', component: News, data: { routeName: "Data" }
    },
    {
        path: 'MARS', component: Home, data: { routeName: "Data" }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }