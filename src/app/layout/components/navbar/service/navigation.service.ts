import { Injectable } from "@angular/core";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigation } from "@fuse/types";
import { Observable, of } from "rxjs";
import { switchMap, take } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class NavigationService {
    constructor(private fuseNavigationService: FuseNavigationService) {}

    defaultNav(): Observable<FuseNavigation[]> {
        return this.setDefaultNav().pipe(
            switchMap(
                (nav): Observable<FuseNavigation[]> => {
                    this.fuseNavigationService.register("main", nav);
                    this.fuseNavigationService.setCurrentNavigation("main");
                    return of(nav);
                }
            )
        );
    }

    setDefaultNav(): Observable<FuseNavigation[]> {
        return of([
            {
                id: "applications",
                title: "Applicationss",
                type: "group",
                children: [
                    {
                        id: "sample",
                        title: "SampleS",
                        type: "item",
                        icon: "email",
                        url: "/sample",
                    },
                    {
                        id: "page-layouts",
                        title: "Page Layouts",
                        type: "collapsable",
                        icon: "view_quilt",
                        children: [
                            {
                                id: "carded",
                                title: "Carded",
                                type: "collapsable",
                                badge: {
                                    title: "12",
                                    bg: "#525e8a",
                                    fg: "#FFFFFF",
                                },
                                children: [
                                    {
                                        id: "3",
                                        title: "Full Width #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/full-width-1",
                                    },
                                    {
                                        id: "full-width-2",
                                        title: "Full Width #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/full-width-2",
                                    },
                                    {
                                        id: "full-width-tabbed-1",
                                        title: "Full Width Tabbed #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/full-width-tabbed-1",
                                    },
                                    {
                                        id: "full-width-tabbed-2",
                                        title: "Full Width Tabbed #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/full-width-tabbed-2",
                                    },
                                    {
                                        id: "left-sidebar-1",
                                        title: "Left Sidebar #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/left-sidebar-1",
                                    },
                                    {
                                        id: "left-sidebar-2",
                                        title: "Left Sidebar #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/left-sidebar-2",
                                    },
                                    {
                                        id: "left-sidebar-tabbed-1",
                                        title: "Left Sidebar Tabbed #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/left-sidebar-tabbed-1",
                                    },
                                    {
                                        id: "left-sidebar-tabbed-2",
                                        title: "Left Sidebar Tabbed #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/left-sidebar-tabbed-2",
                                    },
                                    {
                                        id: "right-sidebar-1",
                                        title: "Right Sidebar #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/right-sidebar-1",
                                    },
                                    {
                                        id: "right-sidebar-2",
                                        title: "Right Sidebar #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/right-sidebar-2",
                                    },
                                    {
                                        id: "right-sidebar-tabbed-1",
                                        title: "Right Sidebar Tabbed #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/right-sidebar-tabbed-1",
                                    },
                                    {
                                        id: "right-sidebar-tabbed-2",
                                        title: "Right Sidebar Tabbed #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/carded/right-sidebar-tabbed-2",
                                    },
                                ],
                            },
                            {
                                id: "simple",
                                title: "Simple",
                                type: "collapsable",
                                badge: {
                                    title: "10",
                                    bg: "#525e8a",
                                    fg: "#FFFFFF",
                                },
                                children: [
                                    {
                                        id: "full-width-1",
                                        title: "Full Width #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/full-width-1",
                                    },
                                    {
                                        id: "full-width-tabbed-1",
                                        title: "Full Width Tabbed #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/full-width-tabbed-1",
                                    },
                                    {
                                        id: "left-sidebar-1",
                                        title: "Left Sidebar #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/left-sidebar-1",
                                    },
                                    {
                                        id: "left-sidebar-2",
                                        title: "Left Sidebar #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/left-sidebar-2",
                                    },
                                    {
                                        id: "left-sidebar-3",
                                        title: "Left Sidebar #3",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/left-sidebar-3",
                                    },
                                    {
                                        id: "left-sidebar-4",
                                        title: "Left Sidebar #4",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/left-sidebar-4",
                                    },
                                    {
                                        id: "right-sidebar-1",
                                        title: "Right Sidebar #1",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/right-sidebar-1",
                                    },
                                    {
                                        id: "right-sidebar-2",
                                        title: "Right Sidebar #2",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/right-sidebar-2",
                                    },
                                    {
                                        id: "right-sidebar-3",
                                        title: "Right Sidebar #3",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/right-sidebar-3",
                                    },
                                    {
                                        id: "right-sidebar-4",
                                        title: "Right Sidebar #4",
                                        type: "item",
                                        url:
                                            "/ui/page-layouts/simple/right-sidebar-4",
                                    },
                                ],
                            },
                            {
                                id: "blank",
                                title: "Blank",
                                type: "item",
                                url: "/ui/page-layouts/blank",
                            },
                        ],
                    },
                ],
            },
            {
                id: "applicationss",
                title: "Shet",
                type: "group",
                children: [
                    {
                        id: "sampleShet",
                        title: "SampleShet",
                        type: "item",
                        icon: "email",
                        url: "/sample3",
                        badge: {
                            title: "2500",
                            bg: "#F44336",
                            fg: "#FFFFFF",
                        },
                    },
                ],
            },
        ]);
    }
}
