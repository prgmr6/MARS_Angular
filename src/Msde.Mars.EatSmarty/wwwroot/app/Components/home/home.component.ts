import { Component, ViewChild, ElementRef,
     Directive }                                from '@angular/core';
import { Router }                               from '@angular/router';
import { ConfigurationService }                 from '../../service/configuration.service';
import { HomeSlider }                           from '../../models/homeslider.model';
import { Program }                              from '../../models/program.model';
import { FrontPage }                            from '../../models/frontpage.model';
import { Benefits }                             from '../../models/benefits.model';
import { BenefitsItem }                         from '../../models/benefitsitem.model';

import { Announcements }                        from '../../models/announcements.model';
import { AnnouncementsItem }                    from '../../models/announcementitem.model';
import { Calendar }                             from '../../models/calendar.model';
import { CalendarItem }                         from '../../models/calendaritem.model';

import { Benefitstip }                          from '../../directives/benefits.directive';
import { Linkstip }                             from '../../directives/linkstip.directive';
import { Programtip }                           from '../../directives/program.directive';
import { Slidertip }                            from '../../directives/slidertip.directive';
import { HomeCarouselComponent }                from '../../directives/homecarousel.component';
import { HomeCarouselEditorComponent }          from '../../editor/homecarouseleditor.component';
import { HomeSliderService }                    from '../../service/homeslider.service';

import { ProgramEditorComponent }               from '../../editor/programeditor.component';
import { ProgramService }                       from '../../service/program.service';

declare var $: any;

@Component({
    selector: 'home',
    templateUrl: `app/templates/home.view.html`,
    providers: [HomeSliderService, ProgramService]
})

export class Home {
    @ViewChild('flexslider') flex: ElementRef;
    @ViewChild('body') body: ElementRef;
    @ViewChild('sidrmain') sidr: ElementRef;
    @ViewChild('tabs') tabs: ElementRef;
    imagePointer: number;
    index: number;
    private NextPhotoInterval: number = 5000;
    private loopSlides: boolean = true;
    slidesLoaded: boolean = false;
    front: FrontPage;

    constructor(
        private _router: Router,
        private config: ConfigurationService) {
            this.front = new FrontPage();
            this.front.BenefitsisHidden = true;
            this.front.BenefitsisEditHidden = true;
            this.front.ProgramisHidden = true;
            this.front.ProgramisEditHidden = true;
            this.front.SliderisHidden = true;
            this.front.SliderisEditHidden = true;

            this.loadCalendar();
            this.loadAnnouncements();
            this.loadBenefits();
            this.loadSliders();
            this.loadPrograms();
    }

    loadPrograms() {

        this.front.Programs = new Array<Program>();
        var m = new Program();

        m.linkName = "After School Meals Program";
        m.title = "After School Meals Program";
        m.text = "<p>Mauris a mattis ipsum. In hac habitasse platea dictumst. Donec at efficitur dolor. Proin tempor nisi eros, non auctor dolor lobortis at. Aenean vestibulum nunc risus, at suscipit lorem maximus sed. Nunc a sollicitudin nisi, sagittis convallis leo. Aliquam sit amet tempor enim, volutpat volutpat est. Proin non sapien sapien. Vivamus sodales erat non nisl placerat ultricies. Fusce sem diam, fermentum ut euismod nec, pretium vitae dui.</p>";
        m.active = true;
        m.showLearn = true;
        m.learnLink = "#/MealPrograms";
        m.showApply = true;
        m.applyLink = "#/Apply";
        m.isHidden = true;
        m.isEditHidden = true;

        var n = new Program();

        n.linkName = "Child & Adult Program";
        n.title = "Child & Adult Program";
        n.text = "<p>Sed scelerisque enim lobortis, finibus eros nec, lobortis ex. Aliquam urna massa, dapibus non aliquet vel, commodo non mi. Phasellus porttitor nisl in magna suscipit aliquet. Mauris id enim sapien. Praesent pharetra tellus sit amet est ornare, at fringilla dolor fringilla.</p>";
        n.active = false;
        n.showLearn = true;
        n.learnLink = "#/MealPrograms/ChildAndAdultCare";
        n.showApply = true;
        n.applyLink = "#/Apply";
        n.isHidden = true;
        n.isEditHidden = true;

        var o = new Program();

        o.linkName = "Family Childcare Program";
        o.title = "Family Childcare Program";
        o.text = "<p>Nulla facilisi. Etiam fermentum sed purus at efficitur. Curabitur leo leo, rhoncus vel neque id, pretium mollis dolor. In sodales metus quam, ac tempor turpis varius eu. Praesent tempor eget arcu at finibus. Morbi in metus vel eros efficitur pellentesque. Mauris lobortis aliquet metus non elementum. Sed fermentum nibh orci, ac vulputate magna tempus eget.</p><p>Pellentesque eleifend massa tellus, ut consequat orci sagittis nec.Proin a efficitur dolor, vel suscipit nibh.Nullam neque odio, vehicula ac arcu vel, iaculis mollis mauris.Fusce molestie mattis orci, sit amet laoreet lacus lobortis at.Maecenas facilisis pharetra ligula ut vulputate.Ut orci nisi, ultricies non tellus ac, imperdiet feugiat est.Vestibulum nec lectus aliquam, venenatis turpis vitae, venenatis felis.</p>";
        o.active = false;
        o.showLearn = true;
        o.learnLink = "#/MealPrograms";
        o.showApply = true;
        o.applyLink = "#/Apply";
        o.isHidden = true;
        o.isEditHidden = true;

        var p = new Program();

        p.linkName = "Fresh Fruit & Veggies Program";
        p.title = "Fresh Fruit & Veggies Program";
        p.text = "<p>Phasellus posuere nisi et ligula luctus tincidunt. Morbi rhoncus mattis mi, vitae pulvinar urna tristique quis. Vestibulum ullamcorper turpis eu orci dictum elementum. Suspendisse potenti. Maecenas pharetra molestie lectus a mollis. Maecenas at lacus erat. Suspendisse nunc sem, commodo sit amet mauris vel, rhoncus imperdiet lacus.</p>";
        p.active = false;
        p.showLearn = true;
        p.learnLink = "#/MealPrograms/MMFA";
        p.showApply = false;
        p.applyLink = "#/Apply";
        p.isHidden = true;
        p.isEditHidden = true;

        var q = new Program();

        q.linkName = "MD Meals for Achievement";
        q.title = "MD Meals for Achievement";
        q.text = "<p>Aliquam aliquet nec odio id ullamcorper. Donec fringilla erat ac dui lacinia dignissim. Aliquam eget efficitur diam, ac interdum nunc. In ac mauris sed quam blandit consequat a in augue. Sed ornare mi diam, vitae posuere augue semper a. Fusce rutrum felis erat, sed iaculis eros congue id. Pellentesque lacinia leo justo, nec scelerisque nisi faucibus sed. Cras laoreet enim at tellus condimentum, at consequat metus pretium.</p>";
        q.active = false;
        q.showLearn = true;
        q.learnLink = "#/MealPrograms/MMFA";
        q.showApply = true;
        q.applyLink = "#/Apply";
        q.isHidden = true;
        q.isEditHidden = true;

        var r = new Program();

        r.linkName = "School Meals Program";
        r.title = "School Meals Program";
        r.text = "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec rutrum libero, id faucibus leo. Cras id purus urna. Etiam congue consequat suscipit. Nunc consequat tincidunt arcu nec aliquet. Sed ornare urna vitae accumsan commodo. Nam sit amet orci quis ex mollis dignissim a vitae lorem. Ut imperdiet rutrum malesuada.</p>";
        r.active = false;
        r.showLearn = true;
        r.learnLink = "#/MealPrograms/SchoolMeals";
        r.showApply = true;
        r.applyLink = "#/Apply";
        r.isHidden = true;
        r.isEditHidden = true;

        var s = new Program();

        s.linkName = "Special Milk Program";
        s.title = "After School Meals Program";
        s.text = "<p>Cras porta velit suscipit velit tempor, sed sagittis ante eleifend. Aenean hendrerit dui a sem auctor, nec ullamcorper velit aliquam. Maecenas cursus ex tempor, commodo tellus sit amet, vehicula libero. Suspendisse nec velit pretium, tempor augue ac, scelerisque justo. Duis aliquet felis nec maximus vulputate. Fusce pulvinar risus at nisi vulputate, in ullamcorper odio sollicitudin.</p>";
        s.active = false;
        s.showLearn = true;
        s.learnLink = "#/MealPrograms/SpecialMilk";
        s.showApply = true;
        s.applyLink = "#/Apply";
        s.isHidden = true;
        s.isEditHidden = true;

        var t = new Program();

        t.linkName = "Summer Food Program";
        t.title = "Summer Food Program";
        t.text = "<p>Vestibulum porttitor maximus ex sit amet viverra. Integer volutpat tempus sem at molestie. Integer velit nibh, dapibus quis nisi gravida, molestie tristique justo. Donec non porttitor risus. Cras tempus tortor id tortor cursus, eu rutrum mi efficitur. Pellentesque non eros metus. Praesent rutrum varius enim sit amet malesuada.</p>";
        t.active = false;
        t.showLearn = true;
        t.learnLink = "#/MealPrograms/SummerFoods";
        t.showApply = true;
        t.applyLink = "#/Apply";
        t.isHidden = true;
        t.isEditHidden = true;

        this.front.Programs[0] = m;
        this.front.Programs[1] = n;
        this.front.Programs[2] = o;
        this.front.Programs[3] = p;
        this.front.Programs[4] = q;
        this.front.Programs[5] = r;
        this.front.Programs[6] = s;
        this.front.Programs[7] = t;
    }

    loadSliders() {

        this.front.Sliders = new Array<HomeSlider>();

        var a = new HomeSlider();
        a.imagepath = "images/hero2-school-breakfast.png";
        a.title = "School Breakfast Program";
        a.text = "Research shows that participating in the School Breakfast Program positively affects students’ health,academic performance, attendance, and behavior.  Breakfast participation in Maryland has increased 96% since 2008.";
        a.link = "#/MealPrograms/SchoolMeals";
        a.isHidden = true;
        a.isEditHidden = true;

        var b = new HomeSlider();
        b.imagepath = "images/hero2-school-wellness.png";
        b.title = "School Wellness";
        b.text = "Schools with a school wellness team are six times more likely to secure funds that support nutrition and physical activity priorities and four times more likely to partner with community organizations. Start or support your school wellness team today!";
        b.link = "#/MealPrograms/SchoolMeals";
        b.isHidden = true;
        b.isEditHidden = true;

        var c = new HomeSlider();
        c.imagepath = "images/hero2-farm-to-school.png";
        c.title = "Farm to School";
        c.text = "Since 2008, Maryland’s Farm to School Program has supported local agriculture, reduced the environmental impact of transporting food, and educated students on where and how their food is grown. In fact, Maryland is recognized as a national leader in the Farm to School movement.";
        c.link = "#/MealPrograms/SchoolMeals";
        c.isHidden = true;
        c.isEditHidden = true;

        var d = new HomeSlider();
        d.imagepath = "images/hero2-summer-food.png";
        d.title = "Summer Food Program";
        d.text = "Summer meals fill the nutrition gap when school is out, lessening summer learning loss and ensuring students return to school ready to learn. Call 211 or visit MDSummerMeals.org to find the site closest to you!";
        d.link = "#/MealPrograms/SchoolMeals";
        d.isHidden = true;
        d.isEditHidden = true;

        var e = new HomeSlider();
        e.imagepath = "images/hero2-training-grants.png";
        e.title = "Training & Grants";
        e.text = "Maryland’s innovative training programs expand the knowledge, skills, and confidence of School Nutrition Professionals. This supports schools’ ability to serve safe, nutritious, appealing food and helps students develop healthy eating skills.";
        e.link = "#/MealPrograms/SchoolMeals";
        e.isHidden = true;
        e.isEditHidden = true;

        this.front.Sliders[0] = a;
        this.front.Sliders[1] = b;
        this.front.Sliders[2] = c;
        this.front.Sliders[3] = d;
        this.front.Sliders[4] = e;

    }

    loadBenefits() {

        this.front.Benefits = new Benefits();
        this.front.Benefits.items = new Array<BenefitsItem>();

        this.front.Benefits.title = "Benefits to the State";
        this.front.Benefits.bottomText = "*2014 data used due to availability";
        this.front.Benefits.link = "#/Data";

        var f = new BenefitsItem();

        f.title = "$300M";
        f.text = "Federal & State funding to Nutrition Programs in Maryland";

        var g = new BenefitsItem();
        g.title = "68,200,000"
        g.text = "Lunches Served in MD Schools under the National School Lunch Program";

        var h = new BenefitsItem();
        h.title = "###";
        h.text = "Children Participating in School Breakfast Per Day on Average";

        var i = new BenefitsItem();
        i.title = "413";
        i.text = "Schools Participating in Maryland Meals for Achievement (MMFA) Program";

        var j = new BenefitsItem();
        j.title = "###";
        j.text = "Breakfast, Lunch, and Supper Meals Served in MD Summer Programs";


        var k = new BenefitsItem();
        k.title = "140";
        k.text = "School Nutrition Professionals Participated in regional, 36 - hour culinary trainings";

        this.front.Benefits.items[0] = f;
        this.front.Benefits.items[1] = g;
        this.front.Benefits.items[2] = h;
        this.front.Benefits.items[3] = i;
        this.front.Benefits.items[4] = j;
        this.front.Benefits.items[5] = k;
    }

    loadAnnouncements() {

        this.front.Announcements = new Announcements();
        this.front.Announcements.title = "News & Announcements";
        this.front.Announcements.bottomText = "";
        this.front.Announcements.link = "#/News";
        this.front.Announcements.items = new Array<AnnouncementsItem>();

        var t = new AnnouncementsItem();

        t.date = "11/02/2016";
        t.id = "1";
        t.tags = "School Meals, Summer Food, Special Milk";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[0] = t;

        t.date = "10/21/2016";
        t.id = "1";
        t.tags = "School Meals, Summer Food, Special Milk";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[1] = t;

        t.date = "9/23/2016";
        t.id = "1";
        t.tags = "Family Childcare, Summer Food, After School Meals";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[2] = t;

        t.date = "9/14/2016";
        t.id = "1";
        t.tags = "School Meals, Summer Food, Special Milk";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[3] = t;

        t.date = "8/08/2016";
        t.id = "1";
        t.tags = "School Meals, Meals for Achievement";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[4] = t;

        t.date = "8/04/2016";
        t.id = "1";
        t.tags = "Special Milk, Fruit &amp; Veggies";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[5] = t;

        t.date = "7/22/2016";
        t.id = "1";
        t.tags = "Family Childcare, Summer Food, After School Meals";
        t.title = "Donec eget elit at elit mollis dictum"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[6] = t;

        t.date = "7/12/2016";
        t.id = "1";
        t.tags = "School Meals, Summer Food, Special Milk";
        t.title = "Lorem ipsum dolor sit amet"
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/News/" + t.id;

        this.front.Announcements.items[7] = t;
    }

    loadCalendar() {

        this.front.Calendar = new Calendar();
        this.front.Calendar.title = "Events Calendar";
        this.front.Calendar.bottomText = "";
        this.front.Calendar.link = "#/Calendar";
        this.front.Calendar.items = new Array<CalendarItem>();

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "October 13, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[0] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "October 18, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[1] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "October 25, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[2] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "November 2, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[3] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "November 22, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[4] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "November 29, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[5] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "December 4, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[6] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "December 18, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[7] = t;

        var t = new CalendarItem();
        t.id = "1";
        t.tags = "News, School Meals, Summer Food";
        t.date = "December 21, 2016";
        t.title = "News title text here News title text here ...";
        t.text = "The beginning text of the news announcement blog will be ...";
        t.link = "#/Calendar/" + t.id;

        this.front.Calendar.items[8] = t;
    }

    showEdit($event, s) {
        s.isEditHidden = false;
    }

    tabClick($event, c) {
        for (let prg of this.front.Programs) {
            prg.active = false;
        }
        c.active = true;
    }
}