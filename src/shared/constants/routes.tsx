// eslint-disable-next-line import/named
import { RouteObject } from 'react-router-dom';

import { BookingCreatePageLazy } from '../../pages/main/booking-create-page/booking-create-page.lazy.ts';
import { BookingPageLazy } from '../../pages/main/booking-page/booking-page.lazy.ts';
import { BookingUpdatePageLazy } from '../../pages/main/booking-update-page/booking-update-page.lazy.ts';
import { BookingViewPageLazy } from '../../pages/main/booking-view-page/booking-view-page.lazy.ts';
import { ContractViewPageLazy } from '../../pages/main/contract-view-page/contract-view-page.lazy.ts';
import { ContractsPageLazy } from '../../pages/main/contracts-page/contracts-page.lazy.ts';
import { DashboardPageLazy } from '../../pages/main/dashboard-page/dashboard-page.lazy.ts';
import { GuestsPageLazy } from '../../pages/main/guests-page/guests-page.lazy.ts';
import { InstitutionPageLazy } from '../../pages/main/institution-page/institution-page.lazy.ts';
import { InstitutionTablePageLazy } from '../../pages/main/institution-table-page/institution-table-page.lazy.ts';
import { InstitutionTablesCreatePageLazy } from '../../pages/main/institution-tables-create-page/institution-tables-create-page.lazy.ts';
import { InstitutionTablesPageLazy } from '../../pages/main/institution-tables-page/institution-tables-page.lazy.ts';
import { InstitutionsPageLazy } from '../../pages/main/institutions-page/institutions-page.lazy.ts';
import { NewsPageLazy } from '../../pages/main/news-page/news-page.lazy.ts';
import { PartnersPageLazy } from '../../pages/main/partners-page/partners-page.lazy.ts';
import { PromoCodesPageLazy } from '../../pages/main/promo-codes-page/promo-codes-page.lazy.ts';
import { StaffPageLazy } from '../../pages/main/staff-page/staff-page.lazy.ts';
import { SupportChatPageLazy } from '../../pages/main/support-chat-page/support-chat-page.lazy.ts';
import { SupportListChatPageLazy } from '../../pages/main/support-list-chat-page/support-list-chat-page.lazy.ts';
import { TagListPageLazy } from '../../pages/main/tag-list-page/tag-list-page.lazy.ts';
import { UserPageLazy } from '../../pages/main/user-page/user-page.lazy.ts';
import { UsersPageLazy } from '../../pages/main/users-page/users-page.lazy.ts';
import { WikiCategoryPageLazy } from '../../pages/main/wiki-category-page/wiki-category-page.lazy.ts';
import { WikiPageLazy } from '../../pages/main/wiki-page/wiki-page.lazy.ts';
import { WikiSectionPageLazy } from '../../pages/main/wiki-section-page/wiki-section-page.lazy.ts';
import { AnyIconName } from '../ui/icon/icon.tsx';

export interface AdditionalRouteProps {
  icon?: AnyIconName;
  onClick?: () => void;
  skipNestedMenuLinks?: boolean;
  title?: string;
}

export type CustomRouteProps = RouteObject & AdditionalRouteProps;
export type CustomRoutePropsWithChildren = Omit<
  CustomRouteProps,
  'children'
> & {
  children?: CustomRouteProps[];
};

export const WIKI_ROUTES: CustomRouteProps[] = [
  {
    Component: WikiPageLazy,
    icon: 'menu/wiki',
    index: true,
    skipNestedMenuLinks: true,
    title: 'База Знаний',
  },
  {
    children: [
      {
        Component: WikiCategoryPageLazy,
        path: 'category/:categoryId/',
      },
      {
        Component: WikiSectionPageLazy,
        path: 'category/:categoryId/section/:sectionId',
      },
    ],
  },
];

export const INSTITUTIONS_ROUTES: CustomRouteProps[] = [
  {
    Component: InstitutionsPageLazy,
    index: true,
  },
  {
    Component: InstitutionPageLazy,
    path: ':id',
  },
  {
    Component: InstitutionTablesPageLazy,
    path: 'tables/:id',
  },
  {
    Component: InstitutionTablesCreatePageLazy,
    path: 'tables/create/:id',
  },
  {
    Component: InstitutionTablePageLazy,
    path: 'tables/view/:id',
  },
];

export const SUPPORT_ROUTES: CustomRouteProps[] = [
  {
    Component: SupportListChatPageLazy,
    index: true,
  },
  {
    Component: SupportChatPageLazy,
    path: ':id',
  },
];

export const BOOKING_ROUTES: CustomRouteProps[] = [
  {
    Component: BookingPageLazy,
    index: true,
  },
  {
    Component: BookingCreatePageLazy,
    path: 'create',
  },
  {
    Component: BookingViewPageLazy,
    path: ':id',
  },
  {
    Component: BookingUpdatePageLazy,
    path: 'update/:id',
  },
];

export const USERS_ROUTES: CustomRouteProps[] = [
  {
    // Component: UsersPageLazy,
    children: [
      {
        Component: UsersPageLazy,
        index: true,
      },
      {
        Component: UserPageLazy,
        path: ':id',
      },
    ],
    icon: 'menu/user',
    title: 'Все пользователи',
  },
  {
    Component: PartnersPageLazy,
    icon: 'menu/partners',
    path: 'partners',
    title: 'Партнеры',
  },
  {
    Component: GuestsPageLazy,
    icon: 'menu/guests',
    path: 'guests',
    title: 'Гости',
  },
  {
    Component: StaffPageLazy,
    icon: 'menu/staff',
    path: 'staff',
    title: 'Сотрудники',
  },
];

export const CONTRACTS_ROUTES: CustomRouteProps[] = [
  {
    Component: ContractsPageLazy,
    index: true,
  },
  {
    Component: ContractViewPageLazy,
    path: ':id',
  },
];

export const MAIN_ROUTES: CustomRouteProps[] = [
  {
    Component: DashboardPageLazy,
    icon: 'menu/dashboard',
    index: true,
    title: 'Dashboard',
  },
  {
    children: CONTRACTS_ROUTES,
    icon: 'menu/contracts',
    path: 'contracts',
    skipNestedMenuLinks: true,
    title: 'Договоры',
  },
  {
    children: INSTITUTIONS_ROUTES,
    icon: 'menu/institutions',
    path: 'institutions',
    skipNestedMenuLinks: true,
    title: 'Заведения',
  },
  {
    Component: NewsPageLazy,
    icon: 'menu/news-events',
    path: 'news',
    title: 'Новости',
  },
  {
    children: WIKI_ROUTES,
    icon: 'menu/wiki',
    path: 'wiki',
    skipNestedMenuLinks: true,
    title: 'База Знаний',
  },
  {
    children: SUPPORT_ROUTES,
    icon: 'menu/support',
    path: '/support-chat',
    skipNestedMenuLinks: true,
    title: 'Поддержка',
  },
  {
    Component: PromoCodesPageLazy,
    icon: 'menu/promo-code',
    path: 'promo-code',
    title: 'Промокоды',
  },
  {
    children: BOOKING_ROUTES,
    icon: 'menu/booking',
    path: 'booking',
    skipNestedMenuLinks: true,
    title: 'Бронирование',
  },
  {
    Component: TagListPageLazy,
    icon: 'menu/tag',
    path: 'tags',
    title: 'Тэги',
  },
  {
    children: USERS_ROUTES,
    icon: 'menu/user',
    path: 'users',
    title: 'Пользователи',
  },
  // {
  //   Component: ReviewsPageLazy,
  //   icon: 'menu/reviews',
  //   path: 'reviews',
  //   title: 'Отзывы',
  // },
  // {
  //   Component: TransactionsPageLazy,
  //   icon: 'menu/transactions',
  //   path: 'transactions',
  //   title: 'Дубликаты транзакций',
  // },
  // {
  //   Component: PlacesPageLazy,
  //   icon: 'menu/places',
  //   path: 'places',
  //   title: 'Места и мероприятия',
  // },
];
