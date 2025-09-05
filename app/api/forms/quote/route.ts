import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/config/site';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'company', 'contactName', 'email', 'phone', 
      'origin', 'destination', 'commodity', 'weight', 
      'pickupDate', 'smsConsent'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    if (!body.smsConsent) {
      return NextResponse.json(
        { error: 'SMS consent is required to process quote request' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format the quote request data
    const quoteData = {
      company: body.company,
      contactName: body.contactName,
      email: body.email,
      phone: body.phone,
      origin: body.origin,
      destination: body.destination,
      commodity: body.commodity,
      weight: body.weight,
      pickupDate: body.pickupDate,
      pickupTime: body.pickupTime || 'Not specified',
      specialNotes: body.specialNotes || 'None',
      smsConsent: body.smsConsent,
      submittedAt: new Date().toISOString()
    };

    // TODO: Implement email sending when mail credentials are available
    // For now, we'll log the quote request and return success
    console.log('Quote Request Received:', {
      timestamp: new Date().toISOString(),
      company: quoteData.company,
      contact: quoteData.contactName,
      route: `${quoteData.origin} → ${quoteData.destination}`,
      commodity: quoteData.commodity,
      weight: quoteData.weight,
      pickup: quoteData.pickupDate
    });

    // Placeholder for email notification
    // When mail credentials are available, implement:
    // 1. Send confirmation email to customer
    // 2. Send notification email to company
    // 3. Store quote request in database if needed

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: `QT-${Date.now()}`, // Temporary quote ID
      data: {
        company: quoteData.company,
        contactName: quoteData.contactName,
        submittedAt: quoteData.submittedAt
      }
    });

  } catch (error) {
    console.error('Quote form submission error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}