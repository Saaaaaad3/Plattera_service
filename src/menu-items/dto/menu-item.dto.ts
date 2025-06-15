import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  Min,
  Max,
  Length,
  IsInt,
} from 'class-validator';
import { Type, Exclude } from 'class-transformer';

export class CreateMenuItemDto {
  @IsNumber()
  restId: number;

  @IsNumber()
  restaurantCategoryId: number;

  @IsString()
  @Length(3, 100)
  itemName: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  itemPrice: number;

  @IsString()
  @Length(10, 500)
  itemDescription: string;

  @IsString()
  @Length(10, 1000)
  itemIngredients: string;

  @IsBoolean()
  itemSweet: boolean;

  @IsBoolean()
  itemSpicy: boolean;

  @IsNumber()
  @Min(0)
  @Max(5)
  itemSpiceLevel: number;

  @IsBoolean()
  itemAvailable: boolean;

  @IsBoolean()
  itemBestSeller: boolean;

  @IsBoolean()
  itemIsVeg: boolean;

  @IsOptional()
  @IsString()
  itemthumbnail?: string;
}

export class UpdateMenuItemDto {
  @IsOptional()
  @IsNumber()
  restaurantCategoryId?: number;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  itemName?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  itemPrice?: number;

  @IsOptional()
  @IsString()
  @Length(10, 500)
  itemDescription?: string;

  @IsOptional()
  @IsString()
  @Length(10, 1000)
  itemIngredients?: string;

  @IsOptional()
  @IsBoolean()
  itemSweet?: boolean;

  @IsOptional()
  @IsBoolean()
  itemSpicy?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  itemSpiceLevel?: number;

  @IsOptional()
  @IsBoolean()
  itemAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  itemBestSeller?: boolean;

  @IsOptional()
  @IsBoolean()
  itemIsVeg?: boolean;

  @IsOptional()
  @IsString()
  itemthumbnail?: string;

  @Exclude()
  @IsOptional()
  categorySlug?: string;

  @Exclude()
  @IsOptional()
  categoryDisplayName?: string;
}

export class PaginatedMenuItemsQueryDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  cursor?: string;

  @IsOptional()
  @IsString()
  categorySlug?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  includeImages?: boolean = false;
}

export class PaginatedMenuItemsResponseDto {
  items: any[];
  nextCursor?: string;
  hasMore: boolean;
  totalCount: number;
  categoryInfo?: {
    categorySlug: string;
    displayName: string;
    totalItems: number;
  };
}

export class CategoryMenuItemsQueryDto {
  @IsInt()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  limit: number = 10;

  @IsOptional()
  @IsString()
  cursor?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  includeImages?: boolean = false;
}

export class CategoryMenuItemsResponseDto {
  categorySlug: string;
  displayName: string;
  items: any[];
  nextCursor?: string;
  hasMore: boolean;
  totalItems: number;
}
