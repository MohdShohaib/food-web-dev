"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Search,
  AlertTriangle,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  X,
  Check,
  Wrench,
} from "lucide-react";

import {
  categories,
  questions,
  CategoryId,
  Question,
} from "@/data/helpData";
import type { HelpScreen } from "@/data/helpData";

 export default function HelpPage() {
  const [currentScreen, setCurrentScreen] = useState<HelpScreen>('home')
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(
    null,
  )
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null,
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  // Filter questions based on search
  const filteredQuestions = questions.filter((q) =>
    q.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  // Filter questions by category
  const categoryQuestions = selectedCategory
    ? questions.filter((q) => q.category === selectedCategory)
    : []
  // Close search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const handleCategoryClick = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId)
    setCurrentScreen('category')
    setSearchQuery('')
  }
  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question)
    setCurrentScreen('question')
    setSearchQuery('')
    setIsSearchFocused(false)
  }
  const handleBackToHome = () => {
    setCurrentScreen('home')
    setSelectedCategory(null)
    setSelectedQuestion(null)
    setSearchQuery('')
    setExpandedQuestions([])
  }
  const handleBackToCategory = () => {
    setCurrentScreen('category')
    setSelectedQuestion(null)
  }
  const toggleQuestionExpand = (questionId: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId],
    )
  }
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-orange-100 text-[#FF5722] font-medium">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }
  // Render search dropdown with results
  const renderSearchDropdown = () => {
    if (!isSearchFocused || !searchQuery) return null
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <button
              key={question.id}
              onClick={() => handleQuestionClick(question)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <p className="text-sm text-slate-900 font-medium">
                {highlightMatch(question.title, searchQuery)}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {question.categoryLabel}
              </p>
            </button>
          ))
        ) : (
          <div className="px-4 py-6 text-center">
            <p className="text-sm text-gray-500">
              No results found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    )
  }
  // Render Help Home Screen
  const renderHomeScreen = () => (
    <div className="flex-1 bg-white flex flex-col">
      <div className="flex-1 px-8 py-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-8">
          How can we help?
        </h1>

        {/* Search Bar */}
        <div ref={searchRef} className="relative max-w-md mb-10">
          <Search
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${isSearchFocused ? 'text-[#FF5722]' : 'text-gray-400'}`}
            size={20}
          />
          <input
            type="text"
            placeholder="Search support"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            className={`w-full pl-12 pr-10 py-3 border rounded-lg text-sm focus:outline-none transition-colors ${isSearchFocused ? 'border-[#FF5722] ring-2 ring-orange-100' : 'border-gray-200'}`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
          {renderSearchDropdown()}
        </div>

        {/* Category Cards - 6 cards in 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="flex flex-col items-center justify-center p-8 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all duration-200 bg-white group"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={28} className="text-[#FF5722]" />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">
                  {category.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="px-8 pb-8">
        <div className="bg-[#FFF8F5] border border-orange-100 rounded-xl p-6 flex items-center justify-between max-w-4xl">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Still having doubts?
            </h3>
            <p className="text-sm text-gray-600">
              You can write to us at{' '}
              <a
                href="mailto:support@grubpac.com"
                className="text-[#FF5722] underline hover:text-[#F4511E]"
              >
                support@grubpac.com
              </a>{' '}
              and we'll get back to you as soon as possible.
            </p>
          </div>
          <button className="flex-shrink-0 ml-6 px-5 py-2.5 bg-[#FF5722] text-white text-sm font-medium rounded-lg hover:bg-[#F4511E] transition-colors">
            WRITE TO US
          </button>
        </div>
      </div>
    </div>
  )
  // Render Category Screen (Troubleshooting)
  const renderCategoryScreen = () => {
    const category = categories.find((c) => c.id === selectedCategory)
    return (
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          {/* Header with breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handleBackToHome}
                className="text-sm text-gray-500 hover:text-slate-900 transition-colors"
              >
                Help
              </button>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-sm font-medium text-slate-900">
                {category?.title}
              </span>
            </div>
            <button className="flex items-center gap-2 text-[#FF5722] text-sm font-medium hover:text-[#F4511E] transition-colors">
              <Wrench size={16} />
              WRITE TO US
            </button>
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="relative max-w-md mb-8">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${isSearchFocused ? 'text-[#FF5722]' : 'text-gray-400'}`}
              size={20}
            />
            <input
              type="text"
              placeholder="Search support"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className={`w-full pl-12 pr-10 py-3 border rounded-lg text-sm focus:outline-none transition-colors ${isSearchFocused ? 'border-[#FF5722] ring-2 ring-orange-100' : 'border-gray-200'}`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}

            {/* Search dropdown for category */}
            {isSearchFocused && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                {categoryQuestions
                  .filter((q) =>
                    q.title.toLowerCase().includes(searchQuery.toLowerCase()),
                  )
                  .map((question) => (
                    <button
                      key={question.id}
                      onClick={() => {
                        toggleQuestionExpand(question.id)
                        setIsSearchFocused(false)
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <p className="text-sm text-slate-900">
                        {highlightMatch(question.title, searchQuery)}
                      </p>
                    </button>
                  ))}
              </div>
            )}
          </div>

          {/* Questions Accordion */}
          <div className="space-y-3 max-w-4xl">
            {categoryQuestions.map((question) => {
              const isExpanded = expandedQuestions.includes(question.id)
              return (
                <div
                  key={question.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestionExpand(question.id)}
                    className="w-full flex items-center gap-3 px-4 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'border-[#FF5722] bg-[#FF5722]' : 'border-gray-300'}`}
                    >
                      {isExpanded && (
                        <Check
                          size={12}
                          className="text-white"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                    <span className="flex-1 text-sm font-medium text-slate-900">
                      {question.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
                      <div className="pl-8">
                        <p className="text-sm text-gray-600 mb-4">
                          {question.content.intro}
                        </p>
                        <ol className="space-y-3">
                          {question.content.steps.map((step, index) => (
                            <li key={index} className="text-sm">
                              <span className="font-medium text-slate-900">
                                {index + 1}. {step.title}:
                              </span>
                              <p className="text-gray-600 mt-0.5 ml-4">
                                {step.description}
                              </p>
                            </li>
                          ))}
                        </ol>
                        {question.content.outro && (
                          <p className="text-sm text-gray-600 mt-4">
                            {question.content.outro}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  // Render Question Detail Screen
  const renderQuestionScreen = () => {
    if (!selectedQuestion) return null
    const category = categories.find((c) => c.id === selectedQuestion.category)
    return (
      <div className="flex-1 bg-white flex flex-col">
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          {/* Header with breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleBackToHome}
                className="text-sm text-gray-500 hover:text-slate-900 transition-colors"
              >
                Help
              </button>
              <ChevronRight size={14} className="text-gray-400" />
              <button
                onClick={handleBackToCategory}
                className="text-sm text-gray-500 hover:text-slate-900 transition-colors"
              >
                {category?.title}
              </button>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-sm font-medium text-slate-900">
                Question
              </span>
            </div>
            <button className="flex items-center gap-2 text-[#FF5722] text-sm font-medium hover:text-[#F4511E] transition-colors">
              Edit Article
            </button>
          </div>

          {/* Question Content */}
          <div className="max-w-3xl">
            <h1 className="text-xl font-bold text-slate-900 mb-6">
              {selectedQuestion.title}
            </h1>

            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600 mb-6">
                {selectedQuestion.content.intro}
              </p>

              <ol className="space-y-4">
                {selectedQuestion.content.steps.map((step, index) => (
                  <li key={index}>
                    <p className="font-medium text-slate-900">
                      {index + 1}. {step.title}
                    </p>
                    <p className="text-gray-600 mt-1 ml-4">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              {selectedQuestion.content.outro && (
                <p className="text-gray-600 mt-6 p-4 bg-orange-50 border border-orange-100 rounded-lg">
                  {selectedQuestion.content.outro}
                </p>
              )}
            </div>

            {/* Feedback Section */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm font-medium text-slate-900 mb-4">
                Was this helpful?
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setFeedbackGiven('yes')
                    setShowFeedbackModal(true)
                  }}
                  className={`px-6 py-2 text-sm font-medium rounded-lg border transition-colors ${feedbackGiven === 'yes' ? 'bg-green-50 border-green-200 text-green-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setFeedbackGiven('no')
                    setShowFeedbackModal(true)
                  }}
                  className={`px-6 py-2 text-sm font-medium rounded-lg border transition-colors ${feedbackGiven === 'no' ? 'bg-red-50 border-red-200 text-red-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // Render Feedback Modal
  const renderFeedbackModal = () => {
    if (!showFeedbackModal) return null
    return (
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Got a minute?
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                We'd love to hear how your experience has been so far.
                <br />
                Your feedback helps us improve GrubPac for you and others.
              </p>

              <button
                onClick={() => setShowFeedbackModal(false)}
                className="w-full py-3 bg-[#FF5722] text-white font-medium rounded-lg hover:bg-[#F4511E] transition-colors mb-3"
              >
                GIVE FEEDBACK
              </button>

              <button
                onClick={() => setShowFeedbackModal(false)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                NO THANKS
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {currentScreen === 'home' && renderHomeScreen()}
      {currentScreen === 'category' && renderCategoryScreen()}
      {currentScreen === 'question' && renderQuestionScreen()}
      {renderFeedbackModal()}
    </>
  )
}
