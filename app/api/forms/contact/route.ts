import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/config/site';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'message', 'smsConsent'];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    if (!body.smsConsent) {
      return NextResponse.json(
        { error: 'SMS consent is required to process contact form' },
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

    // Validate phone format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = body.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (body.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be less than 2000 characters' },
        { status: 400 }
      );
    }

    // Format the contact form data
    const contactData = {
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.trim(),
      message: body.message.trim(),
      smsConsent: body.smsConsent,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ipAddress: request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'Unknown'
    };

    // TODO: Implement email sending when mail credentials are available
    // For now, we'll log the contact form submission and return success
    console.log('Contact Form Submission Received:', {
      timestamp: new Date().toISOString(),
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
      messageLength: contactData.message.length,
      smsConsent: contactData.smsConsent,
      ipAddress: contactData.ipAddress
    });

    // Placeholder for email notification
    // When mail credentials are available, implement:
    // 1. Send confirmation email to customer
    // 2. Send notification email to company
    // 3. Store contact form submission in database if needed

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      contactId: `CF-${Date.now()}`, // Temporary contact ID
      data: {
        name: contactData.name,
        email: contactData.email,
        submittedAt: contactData.submittedAt
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
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