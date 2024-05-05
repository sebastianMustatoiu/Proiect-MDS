<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(2),
            'author' => fake()->name(),
            'category' => collect(['Fiction', 'Non-fiction', 'Science Fiction', 'Mystery', 'Romance', 'Horror'])->random(),
            'publisher' => collect(['Penguin Random House', 'HarperCollins Publishers', 'Simon & Schuster', 'Hachette Book Group', 'Macmillan Publishers'])->random(),
            'image' => fake()->imageUrl(),
            'description' => fake()->text(),
            'publication_date' => fake()->date('Y-m-d','now')
        ];
    }
}
