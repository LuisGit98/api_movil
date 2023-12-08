-- CreateTable
CREATE TABLE `Users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `curp` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,

    UNIQUE INDEX `Users_curp_key`(`curp`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservations` (
    `reservation_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `check_in` DATETIME(3) NOT NULL,
    `check_out` DATETIME(3) NOT NULL,
    `special_preferences` VARCHAR(191) NULL,
    `pay_method` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`reservation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coupons` (
    `id_coupon` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `discount_percent` INTEGER NOT NULL,
    `start_promo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `end_promo` DATETIME(3) NOT NULL,
    `reservations_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_coupon`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `States` (
    `id_state` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_state`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Municipios` (
    `id_municipio` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `state_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_municipio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hotels` (
    `id_hotel` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `id_municipio` INTEGER NOT NULL,

    PRIMARY KEY (`id_hotel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rooms` (
    `id_room` INTEGER NOT NULL AUTO_INCREMENT,
    `room_number` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `id_hotel` INTEGER NOT NULL,

    UNIQUE INDEX `Rooms_room_number_id_hotel_key`(`room_number`, `id_hotel`),
    PRIMARY KEY (`id_room`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Favoritos` (
    `id_fav` INTEGER NOT NULL,
    `id_hotel` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_fav`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Coupons` ADD CONSTRAINT `Coupons_reservations_id_fkey` FOREIGN KEY (`reservations_id`) REFERENCES `Reservations`(`reservation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Municipios` ADD CONSTRAINT `Municipios_state_id_fkey` FOREIGN KEY (`state_id`) REFERENCES `States`(`id_state`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hotels` ADD CONSTRAINT `Hotels_id_municipio_fkey` FOREIGN KEY (`id_municipio`) REFERENCES `Municipios`(`id_municipio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rooms` ADD CONSTRAINT `Rooms_id_hotel_fkey` FOREIGN KEY (`id_hotel`) REFERENCES `Hotels`(`id_hotel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favoritos` ADD CONSTRAINT `Favoritos_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Rooms`(`id_room`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favoritos` ADD CONSTRAINT `Favoritos_id_hotel_fkey` FOREIGN KEY (`id_hotel`) REFERENCES `Hotels`(`id_hotel`) ON DELETE RESTRICT ON UPDATE CASCADE;
